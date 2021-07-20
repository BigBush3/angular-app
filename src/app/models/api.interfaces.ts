import { Cart, CartProduct, OrderType, Size } from './cart.interfaces';
import { DeliveryType } from './checkout.interfaces';

export interface CustomerInfo {
  paid: boolean;
  pvzCode?: string;
  tariff_code: number;
  payerName: string;
  payerPhone: string;
  takerName: string;
  takerPhone: string;
  email: string;
  country: string;
  city: string;
  deliveryType: DeliveryType;
  paymentType: string;
  deliveryTime: string;
  street?: string;
  house?: string;
  appartment?: string;
  pvz?: string;
  commentary?: string;
  promocode?: string;
}

export interface OrderProduct {
  template: string;
  size: Size;
  price: number;
  quantity: number;
  type: OrderType;
  filename: string;
}

export interface NewOrder {
  status: string;
  cdek: string;
  customerData: CustomerInfo;
  products: OrderProduct[];
  totalPrice: number;
  timeOrdered: string;
}

export type PaymentProduct = Omit<CartProduct, 'poster'>;

export interface NewPayment {
  email: string;
  products: PaymentProduct[];
  promocode: string;
  deliveryPrice: number;
}

export interface CdekAutorization {
  access_token: string;
  token_type: string;
  expires_in: number;
  scope: string;
  jti: string;
}

export interface CdekCitiesResponse {
  cities: CdekCity[];
}

export interface CdekCity {
  code: number;
  fias_guid: string;
  longitude: number;
  latitude: number;
  country_code: string;
  region: string;
  region_code: number;
  sub_region: string;
  city: string;
  kladr_code: string;
  postal_codes: string[];
  country: string;
  time_zone: string;
  payment_limit: number;
}

export interface CdekOfficesResponse {
  offices: CdekOffice[];
}

export interface CdekOffice {
  code: string;
  name: string;
  address_comment: string;
  nearest_station: string;
  nearest_metro_station: string;
  work_time: string;
  phones: { number: string }[];
  email: string;
  note: string;
  type: string;
  owner_code: string;
  take_only: boolean;
  is_handout: boolean;
  is_dressing_room: boolean;
  have_cashless: boolean;
  have_cash: boolean;
  allowed_cod: boolean;
  office_image_list: {
    url: string;
  }[];
  work_time_list: {
    day: number;
    time: string;
  }[];
  weight_min: number;
  weight_max: number;
  location: {
    country_code: string;
    region_code: number;
    region: string;
    city_code: number;
    city: string;
    postal_code: string;
    longitude: number;
    latitude: number;
    address: string;
    address_full: string;
  };
  fulfillment: boolean;
}

export interface CdekDeliveryRequest {
  type: number;
  date?: string | Date;
  currency?: number;
  tariff_code: number;
  from_location: {
    code: number;
    postal_code?: number;
    country_code?: string;
    city?: string;
    address?: string;
  };
  to_location: {
    code: number;
    postal_code?: number;
    country_code?: string;
    city?: string;
    address?: string;
  };
  services?: {
    code: string;
    parameter: string;
  }[];
  packages: {
    height: number;
    length: number;
    weight: number;
    width: number;
  }[];
}

export interface CdekDelivery {
  currency: string;
  delivery_sum: number;
  period_min: number;
  period_max: number;
  weight_calc: number;
  total_sum: number;
  errors?: {
    code: string;
    message: string;
  }[];
}

export interface CdekDeliveryResponse {
  time: CdekDelivery;
}

export interface ResponseOrder {
  id: number;
  payerName: string;
  payerPhone: string;
  takerName: string;
  takerPhone: string;
  email: string;
  country: string;
  city: string;
  deliveryType: string;
  street: string;
  house: string;
  appartment: string;
  pvz: string;
  commentary: string;
  promocode: string;
  totalPrice: number;
  timeOrdered: string;
  paymentType: string;
  published_at: string;
  created_at: string;
  updated_at: string;
  products: any[];
}

export interface CdekPackage {
  number: string;
  weight: number;
  length: number;
  width: number;
  height: number;
  items: {
    name: string;
    ware_key: string;
    payment: {
      value: number;
    };
    cost: number;
    weight: number;
    amount: number;
  }[];
}

export interface CdekNewOrder {
  tariff_code: number;
  delivery_point?: string;
  date_invoice?: string;
  shipper_name?: string;
  shipper_address?: string;
  recipient: {
    name: string;
    email?: string;
    phones: {
      number: string;
      additional?: string;
    }[]
  }
  to_location?: {
    address: string;
    code?: number | string;
    postal_code?: number;
    country_code?: string;
    region?: string;
    sub_region?: string;
    city?: string;
  } | undefined;
  packages: CdekPackage[];
}

export interface CdekOrderSuccess {
  order: {
    entity: {
      uuid: string;
    };
    requests: {
      date_time: string;
      request_uuid: string;
      state: string;
      type: string;
    }[];
  }
}