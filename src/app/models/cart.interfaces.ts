export interface Poster {
  canvas: string;
  template: string;
  size: string;
  text: {
    title: string;
    subtitle: string;
    message: string;
    fullDate: string;
    coordinates: string;
    color: string;
  };
}

export interface CartProduct {
  price: number;
  size: Size;
  type: OrderType;
  poster: Poster;
  quantity: number;
  template: string;
  preview: string;
}

export interface Cart {
  currentProduct: CartProduct;
  products: CartProduct[];
  total: number;
}

export interface Promocode {
  id: number;
  name: string;
  discount: number;
}

export type Size = '21x30' | '30x40' | '40x50' | '50x70';

export type OrderType = 'print' | 'pdf-only';
