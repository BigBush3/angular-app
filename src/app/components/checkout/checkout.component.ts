import { Component, OnInit } from '@angular/core';
import { AfterViewChecked } from '@angular/core';
import { Router } from '@angular/router';

import {
  CdekCity,
  CdekOffice,
  CustomerInfo,
  NewPayment,
} from '../../models/api.interfaces';
import { ApiService } from '../../services/api.service';
import { CartProduct, Poster } from '../../models/cart.interfaces';
import { CartService } from '../../services/cart.service';
import {
  countrySelect,
  DeliveryType,
  ValidationFields,
} from '../../models/checkout.interfaces';
import { CitiesService } from 'src/app/services/cities.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css'],
})
export class CheckoutComponent implements OnInit {
  email = '';
  discount = 0;
  totalPrice =
    this.cartService.cart.total - this.discount + this.getDeliveryPrice();
  payerPhone = '';
  payerName = '';
  takerPhone = '';
  takerName = '';
  country = 'Россия';
  city = '';
  selectedCity: CdekCity = null!;
  showSearchCityBar = false;
  filteredCities: CdekCity[] = [];
  deliveryType: DeliveryType = 'самовывоз';
  formFilled = false;
  promocode = '';
  street = '';
  house = '';
  appartment = '';
  pvz: CdekOffice = null!;
  selectedOffice: CdekOffice = null!;
  deliveryTime = new Date().toLocaleDateString();
  paymentType = 'юкасса';
  commentary = '';
  skipPayment = false;

  chosenCities: CdekCity[] = this.citiesService.rusCities;
  chosenOffices: CdekOffice[] = [];

  products: CartProduct[] = null!;
  productsPrice = this.cartService.getTotalPrice();

  activatedPromocode = false;
  usedPromocode = '';

  orderIsDigital = false;

  orderLoading = false;

  constructor(
    private apiService: ApiService,
    private cartService: CartService,
    private citiesService: CitiesService,
    private router: Router
  ) {}

  checkForDigital() {
    if (this.products) {
      const printedProduct = this.products.find((p) => p.type === 'print');
      if (printedProduct) {
        this.orderIsDigital = false;
        return;
      }
      this.orderIsDigital = true;
      return;
    }
    return;
  }

  async sendOrder() {
    this.setLoader(true);
    this.saveCustomerToStorage();
    this.setCartTotal();
    const response = await this.apiService.createPdfAndSaveOrder('Не оплачено');
    // @ts-ignore
    window.localStorage.setItem('starmap-order', response.id);
    this.router.navigate(['/order-confirm']);
    this.setLoader(false);
  }

  changeCountry(event: any) {
    const select = event.target.value as countrySelect;
    const countryTable = {
      '1': 'Россия',
      '2': 'Казахстан',
      '3': 'Беларусь',
      '4': 'Армения',
      '5': 'Киргизия',
    };
    const citiesTable = {
      '1': this.citiesService.rusCities,
      '2': this.citiesService.kazCities,
      '3': this.citiesService.belCities,
      '4': this.citiesService.armCities,
      '5': this.citiesService.kirCities,
    };
    this.country = countryTable[select];
    this.chosenCities = citiesTable[select];
  }

  searchCity() {
    console.log(this.chosenCities);
    this.filteredCities = this.chosenCities.filter((city) =>
      city.city.toLowerCase().includes(this.city.toLowerCase())
    );
    this.showSearchCityBar = this.filteredCities.length < 500;
    if (this.city === '') {
      this.hideCitySearch();
    }
  }

  async setCity(city: CdekCity) {
    this.selectedCity = city;
    this.city = city.city;
    this.getDeliveryDate();
    await this.getOffices();
  }

  async getOffices() {
    this.chosenOffices = await this.apiService.getCdekOffices(
      this.selectedCity.code
    );
  }

  hideCitySearch() {
    this.showSearchCityBar = false;
  }

  setDeliveryType(deliveryType: DeliveryType) {
    this.deliveryType = deliveryType;
    this.getDeliveryDate();
    this.updateTotalPrice();
  }

  getTariff = (deliveryType: DeliveryType, country: string) => {
    const tariffTable = {
      самовывоз: 136,
      курьер: 137,
    };
    const tariffTableAM = {
      самовывоз: 10,
      курьер: 11,
    };
    if (country !== 'Армения') {
      return tariffTable[deliveryType];
    }
    return tariffTableAM[deliveryType];
  };

  async getDeliveryDate() {
    // @ts-ignore
    Date.prototype.addDays = function (days: number) {
      var date = new Date(this.valueOf());
      date.setDate(date.getDate() + days);
      return date;
    };
    const deliveryData = await this.apiService.getCdekDeliveryTime(
      this.selectedCity,
      this.cartService.getCurrentProductSize(),
      this.getTariff(this.deliveryType, this.country)
    );
    if (deliveryData.errors) {
      this.deliveryTime = deliveryData.errors[0].message;
      return;
    }
    const dateNow = new Date();

    this.deliveryTime = dateNow
      // @ts-ignore
      .addDays(deliveryData.period_max + 2)
      .toLocaleDateString();
  }

  async changePvz(event: any) {
    this.pvz = this.selectedOffice;
  }

  async ngOnInit() {
    this.products = this.cartService.getProducts();
    this.productsPrice = this.cartService.getTotalPrice();
    this.updateTotalPrice();
    this.checkForDigital();
    this.validateForm();
    this.chosenCities = this.citiesService.rusCities;
  }

  validateForm() {
    let validationFields: ValidationFields = {};
    if (!this.orderIsDigital) {
      validationFields = {
        email: this.email,
        payerName: this.payerName,
        payerPhone: this.payerPhone,
        takerName: this.takerName,
        takerPhone: this.takerPhone,
        country: this.country,
        city: this.city,
      };
      if (this.deliveryType === 'курьер') {
        validationFields['house'] = this.house;
        validationFields['street'] = this.street;
        validationFields['appartment'] = this.appartment;
      } else {
        if (this.pvz) {
          validationFields['pvz'] = this.pvz.location.address_full;
        } else {
          validationFields['pvz'] = '';
        }
      }
    } else {
      validationFields = {
        email: this.email,
        payerName: this.payerName,
        payerPhone: this.payerPhone,
        takerName: this.takerName,
        takerPhone: this.takerPhone,
      };
    }
    let validated = true;
    for (let prop of Object.keys(validationFields)) {
      if (validationFields[prop].length <= 0) {
        validated = false;
      }
    }
    this.formFilled = validated;
  }

  isValidOrder() {
    return !this.formFilled;
  }

  setCartTotal() {
    this.cartService.cart.total = this.totalPrice;
    this.cartService.save();
  }

  checkOrderType() {
    return !this.skipPayment;
  }

  removeProduct(poster: Poster) {
    this.cartService.removeFromCart(poster);
    this.products = this.cartService.getProducts();
    this.checkForDigital();
    this.updateTotalPrice();
  }

  updateQuantity(qty: any, poster: Poster) {
    this.cartService.setQuantity(poster, qty.value);
    this.updateTotalPrice();
  }

  saveCustomerToStorage() {
    const commentary = this.skipPayment
      ? `Мне не подходят условия доставки, позвоните мне. ${this.commentary}`
      : this.commentary;
    const deliveryTime = this.orderIsDigital ? '' : this.deliveryTime;
    const customerInfo: CustomerInfo = {
      payerName: this.payerName,
      takerName: this.takerName,
      email: this.email,
      payerPhone: this.payerPhone,
      takerPhone: this.takerPhone,
      deliveryType: this.deliveryType,
      paymentType:
        this.paymentType === 'юкасса'
          ? 'Оплата на сайте'
          : 'Оплата при получении',
      country: this.country,
      city: this.city,
      house: this.house,
      appartment: this.appartment,
      street: this.street,
      promocode: this.usedPromocode,
      commentary,
      pvz: this.pvz ? this.pvz.location.address_full : '',
      pvzCode: this.pvz ? this.pvz.code : '',
      tariff_code: this.getTariff(this.deliveryType, this.country),
      paid: false,
      deliveryTime,
    };
    window.localStorage.setItem(
      'starmap-customer',
      JSON.stringify(customerInfo)
    );
    return customerInfo;
  }

  async getPayment() {
    this.setLoader(true);
    this.saveCustomerToStorage();
    this.setCartTotal();
    const newPayment: NewPayment = {
      email: this.email,
      products: this.cartService.getProducts().map((p) => ({
        template: p.template,
        type: p.type,
        price: p.price,
        quantity: p.quantity,
        size: p.size,
        preview: p.preview
      })),
      promocode: this.promocode,
      deliveryPrice: this.getDeliveryPrice()
    };
    const payment = await this.apiService.requestPayment(newPayment);
    const paymentId = window.localStorage.getItem('starmap-paymentId');
    if (!paymentId) {
      if (payment.id) {
        window.localStorage.setItem('starmap-paymentId', payment.id);
      } else {
        this.setLoader(false);
        return;
      }
    }
    window.location.href = payment.confirmation.confirmation_url;
    this.setLoader(false);
  }

  async applyPromocode() {
    const code = await this.apiService.getPromocode(this.promocode);
    if (!code.discount) {
      return;
    }
    this.discount = (this.cartService.getTotalPrice() / 100) * code.discount;
    this.activatedPromocode = true;
    this.usedPromocode = this.promocode;
    this.updateTotalPrice();
  }

  updateTotalPrice() {
    this.cartService.updatePriceTotal();
    this.productsPrice = this.cartService.getTotalPrice();
    this.totalPrice =
      this.cartService.getTotalPrice() -
      this.discount +
      this.getDeliveryPrice();
  }

  getDeliveryPrice() {
    this.checkForDigital();
    if (!this.orderIsDigital) {
      return this.deliveryType === 'самовывоз' ? 300 : 500;
    } else {
      return 0;
    }
  }

  setLoader(bool: boolean) {
    this.orderLoading = bool;
  }

  clearForms() {
    this.payerName = '';
    this.takerName = '';
    this.payerPhone = '';
    this.payerName = '';
    this.house = '';
    this.appartment = '';
    this.city = '';
    this.street = '';
    this.email = '';
  }

  // FOR TESTING POSTER SIZES

  // sendSvg() {
  //   this.saveCustomerToStorage();
  //   this.apiService.createPdfAndSaveOrder('test');
  // }
}
