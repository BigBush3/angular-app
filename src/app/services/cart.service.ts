import { Injectable } from '@angular/core';

import { Cart, CartProduct, OrderType, Poster, Size } from '../models/cart.interfaces';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cart: Cart = null!;
  constructor() {}

  get currentProduct() {
    return this.cart.currentProduct;
  }

  init() {
    this.cart = this.getCartFromStorage();
  }

  save() {
    window.localStorage.setItem('starmap-cart', JSON.stringify(this.cart));
  }

  getProducts() {
    return this.cart.products;
  }

  updateSize(size: Size) {
    this.currentProduct.size = size;
    this.save();
  }

  getCurrentProductSize() {
    return this.currentProduct.size;
  }

  updatePrice(price: number) {
    this.currentProduct.price = price;
    this.save();
  }

  getCurrentProductPrice() {
    return this.currentProduct.price;
  }

  updatePriceTotal() {
    let total = 0;
    for (const product of this.cart.products) {
      total += product.price * product.quantity;
    }
    this.cart.total = total;
    this.save();
  }

  getTotalPrice() {
    return this.cart.total;
  }

  clearCart() {
    this.cart = null!;
    window.localStorage.removeItem('starmap-cart');
    this.init();
  }

  removeFromCart(poster: Poster) {
    this.cart.products = this.cart.products.filter((p) => p.poster !== poster);
    this.save();
  }

  setQuantity(poster: Poster, qty: number) {
    const product = this.cart.products.find((p) => p.poster === poster);
    if (!product) {
      return;
    }
    product.quantity = qty;
    this.save();
  }

  updateOrderType(type: OrderType) {
    this.currentProduct.type = type;
    this.save();
  }

  async saveProduct(newProduct: CartProduct) {
    this.cart.products.push(newProduct);
    this.updatePriceTotal();
    this.save();
  }

  setTemplate(template: string) {
    this.currentProduct.template = template;
    this.save();
  }

  getCartFromStorage(): Cart {
    let cart;
    cart = window.localStorage.getItem('starmap-cart');
    if (!cart) {
      const size: Size = '21x30';
      const type: OrderType = 'print';
      cart = {
        currentProduct: {
          price: 0,
          size,
          type,
          quantity: 0,
          template: 'black',
          poster: null!,
          preview: ''
        },
        products: [],
        total: 0,
      };
      window.localStorage.setItem('starmap-cart', JSON.stringify(cart));
      return cart;
    }
    return JSON.parse(cart);
  }
}
