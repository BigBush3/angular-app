import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { retry, retryWhen, delay, take, catchError } from 'rxjs/operators';
import {
  CdekCitiesResponse,
  CdekCity,
  CdekDeliveryRequest,
  CdekDeliveryResponse,
  CdekNewOrder,
  CdekOfficesResponse,
  CdekOrderSuccess,
  CdekPackage,
  CustomerInfo,
  NewOrder,
  NewPayment,
  OrderProduct,
  ResponseOrder,
} from '../models/api.interfaces';
import { CartProduct, Poster, Promocode, Size } from '../models/cart.interfaces';
import { CartService } from './cart.service';
import { ContentBlock } from '../models/main.interfaces';
import { ConversionResponse } from '../models/order-complete.interfaces';
import { Payment } from '../models/payment.interfaces';
import { environment } from 'src/environments/environment';
import * as RU from '../../assets/cities-data/RUcities.json';
import * as AM from '../../assets/cities-data/AMcities.json';
import * as BY from '../../assets/cities-data/BYcities.json';
import * as KZ from '../../assets/cities-data/KZcities.json';
import * as KG from '../../assets/cities-data/KGcities.json';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  baseUrl = environment.apiUrl;
  paymentUrl = `${this.baseUrl}/payments`;
  promocodeUrl = `${this.baseUrl}/promocodes/name`;
  contentUrl = `${this.baseUrl}/content-blocks`;
  conversionUrl = `${this.baseUrl}/convert`;
  ordersUrl = `${this.baseUrl}/orders`;
  cdekOrdersUrl = `${this.baseUrl}/cdek`;

  constructor(private http: HttpClient, private cartService: CartService) {}

  async createPdfAndSaveOrder(status: string) {
    const customerInfo = window.localStorage.getItem('starmap-customer');
    if (!customerInfo) {
      throw new Error('No customer');
    }
    const customer = JSON.parse(customerInfo) as CustomerInfo;
    if (status === 'Оплачено') {
      customer.paid = true;
    }
    if (!customer.pvz) {
      customer.pvz = '';
    }

    let productsForOrder: OrderProduct[] = [];
    for (let i = 0; i < this.cartService.getProducts().length; i++) {
      const product = this.cartService.getProducts()[i];
      console.log('product we send', product);
      const posterToSend: Poster = product.poster;
      const convertedFile = await this.convertToPdf(posterToSend);
      const orderProduct: OrderProduct = {
        template: product.template,
        type: product.type,
        size: product.size,
        quantity: product.quantity,
        price: product.price,
        filename: convertedFile.filename,
      };
      productsForOrder.push(orderProduct);
    }
    let cdekRes = '';
    try {
      cdekRes = await this.createCdekOrder(customer, this.cartService.getProducts());
    } catch (error) {
      console.log('cdek failed')
    }
    const newOrder: NewOrder = {
      customerData: { ...customer },
      products: productsForOrder,
      totalPrice: this.cartService.getTotalPrice(),
      timeOrdered: new Date().toLocaleString(),
      status,
      cdek: cdekRes,
    };

    const order = await this.createOrder(newOrder);
    console.log('order created', order);
    return order;
  }

  // no time to write it better...
  async getCdekCities(countryId: 'RU' | 'AM' | 'BY' | 'KG' | 'KZ') {
    console.log('ru', RU);
    const cities = {
      // @ts-ignore
      'RU': RU.default,
      // @ts-ignore
      'AM': AM.default,
      // @ts-ignore
      'BY': BY.default,
      // @ts-ignore
      'KG': KG.default,
      // @ts-ignore
      'KZ': KZ.default
    }
    // const response = await this.http
    //   .get<CdekCitiesResponse>(`${this.baseUrl}/cdek`, {
    //     params: {
    //       countryCode: countryId,
    //     },
    //   })
    //   .pipe(retryWhen(errors => errors.pipe(delay(2000), take(40))))
    //   .toPromise();
    const countryCities = cities[countryId];
    return JSON.parse(JSON.stringify(countryCities));
  }

  async getCdekOffices(code: number) {
    const response = await this.http
      .get<CdekOfficesResponse>(`${this.baseUrl}/cdek/offices`, {
        params: {
          city_code: code.toString(),
        },
      })
      .pipe(retry(4))
      .toPromise();
    return response.offices;
  }

  async getCdekDeliveryTime(city: CdekCity, size: Size, tariff_code: number) {
    const packageSize = {
      '21x30': {
        width: 25,
        height: 35,
        length: 6,
        weight: 1000,
      },
      '30x40': {
        width: 35,
        height: 35,
        length: 6,
        weight: 1,
      },
      '40x50': {
        width: 45,
        height: 45,
        length: 6,
        weight: 2,
      },
      '50x70': {
        width: 55,
        height: 75,
        length: 6,
        weight: 3,
      },
    };
    const deliveryData: CdekDeliveryRequest = {
      type: 1,
      tariff_code,
      from_location: {
        code: 137,
      },
      to_location: {
        code: +city?.code || 137,
      },
      packages: [
        {
          height: packageSize[size].height,
          width: packageSize[size].width,
          length: packageSize[size].length,
          weight: packageSize[size].weight,
        },
      ],
    };
    const response = await this.http
      .post<CdekDeliveryResponse>(`${this.baseUrl}/cdek/delivery`, {
        deliveryData,
      })
      .pipe(retry(4))
      .toPromise();
    return response.time;
  }

  async requestPayment(newPayment: NewPayment): Promise<Payment> {
    const payment: Payment = await this.http
      .post<Payment>(this.paymentUrl, newPayment)
      .toPromise();
    if (!payment) {
      throw new Error('No payment obj');
    }
    console.log(payment);
    const cart = this.cartService.getCartFromStorage();
    cart.total = +payment.amount.value;
    window.localStorage.setItem('starmap-cart', JSON.stringify(cart));
    window.localStorage.setItem(
      'starmap-paymentId',
      JSON.stringify(payment.id)
    );
    return payment;
  }

  async getSinglePayment(id: string): Promise<Payment> {
    const payment = await this.http
      .get<Payment>(`${this.paymentUrl}/${id}`)
      .pipe(retry(4))
      .toPromise();
    if (!payment) {
      throw new Error('No payment found');
    }
    return payment;
  }

  async getPromocode(promocode: string): Promise<Promocode> {
    const code = await this.http
      .get<Promocode>(`${this.promocodeUrl}/${promocode}`)
      .toPromise();
    if (!code) {
      throw new Error('No code found');
    }
    return code;
  }

  async getContent(): Promise<ContentBlock[]> {
    const contentBlocks = await this.http
      .get<ContentBlock[]>(this.contentUrl)
      .toPromise();
    if (!contentBlocks) {
      throw new Error('Error fetching content for main page');
    }
    return contentBlocks;
  }

  async convertToPdf(poster: Poster): Promise<ConversionResponse> {
    console.log('sending poster', poster);
    const response = await this.http
      .post<ConversionResponse>(this.conversionUrl, poster)
      .toPromise();
    if (!response) {
      throw new Error('Error during pdf conversion');
    }
    return response;
  }

  async createOrder(newOrder: NewOrder) {
    const response = await this.http.post(this.ordersUrl, newOrder).toPromise();
    if (!response) {
      throw new Error('Error during order creation');
    }
    console.log(response);
    return response;
  }

  async findOrder(orderId: number) {
    const response = await this.http
      .get<ResponseOrder>(`${this.ordersUrl}/${orderId}`)
      .toPromise();
    if (!response) {
      throw new Error('No order found');
    }
    return response;
  }

  async createCdekOrder(
    customer: CustomerInfo,
    products: CartProduct[],
  ) {
    const sizeToWeight = {
      '21x30': 1000,
      '30x40': 1000,
      '40x50': 2000,
      '50x70': 3000,
    };
    const calcSizes = (products: CartProduct[]) => {
      let weight = 0;
      let length = 0;
      let width = 0;
      let height = 0;
      products.forEach((p) => {
        weight += sizeToWeight[p.size];
        length += p.quantity * 6;
        const pWidth = +p.size.slice(0, 2);
        const pHeight = +p.size.slice(3);
        if (pWidth > width) width = pWidth;
        if (pHeight > height) height = pHeight;
      });
      return { weight, length, width, height };
    };
    const calcPayment = (paid: boolean, product: CartProduct) => {
      if (paid) {
        return {
          value: 0,
        };
      } else {
        return {
          value: product.price,
        };
      }
    };
    const toInvoiceDate = (date: Date) => {
      const month = ('0' + date.getMonth()).slice(-2);
      const day = ('0' + date.getDate()).slice(-2);
      return `${date.getFullYear()}-${month}-${day}`;
    };
    const { weight, length, width, height } = calcSizes(products);
    const items = products.map((p) => ({
      name: `Карта ${p.size}`,
      ware_key: p.size,
      weight: sizeToWeight[p.size],
      amount: p.quantity,
      payment: calcPayment(customer.paid, p),
      cost: p.price,
    }));
    const packages: CdekPackage[] = [
      {
        number: '1',
        weight,
        length,
        width,
        height,
        items,
      },
    ];
    const locationOrUndefined = () => {
      const customerFullAddress = `${customer.country}, ${customer.city}, ${customer.street}, ${customer.house}, ${customer.appartment}`;
      if (
        customer.appartment &&
        customer.street &&
        customer.house &&
        customer.appartment.length > 0 &&
        customer.street.length > 0 &&
        customer.house.length > 0 &&
        !customer.pvzCode
      ) {
        return {
          address: customerFullAddress,
        };
      }
      return undefined;
    };
    const newOrder: CdekNewOrder = {
      tariff_code: customer.tariff_code,
      delivery_point: customer.pvzCode || '',
      to_location: locationOrUndefined(),
      date_invoice: toInvoiceDate(new Date()),
      recipient: {
        name: customer.takerName,
        phones: [
          {
            number: customer.takerPhone,
          },
        ],
      },
      packages,
    };
    console.log('will send cdek order to backend', newOrder);
    const response = await this.http
      .post<CdekOrderSuccess>(this.cdekOrdersUrl, newOrder)
      .pipe(retry(4), catchError((e) => 'error'))
      .toPromise();
    if (typeof response !== 'string') {
      console.log('order by CDEK', response.order);
      return response.order.entity.uuid;
    }
    return 'Ошибка создания накладной';
  }
}
