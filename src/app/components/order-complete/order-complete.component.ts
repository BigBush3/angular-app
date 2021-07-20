import { Component, OnInit } from '@angular/core';

import { ApiService } from '../../services/api.service';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-order-complete',
  templateUrl: './order-complete.component.html',
  styleUrls: ['./order-complete.component.css'],
})
export class OrderCompleteComponent implements OnInit {
  paid = false;
  status = 'unknown';
  loading = false;

  constructor(
    private apiService: ApiService,
    private cartService: CartService
  ) {}

  async ngOnInit(): Promise<void> {
    this.setLoader(true);
    let paymentId = window.localStorage.getItem('starmap-paymentId');
    try {
      if (!paymentId) {
        console.log('NO PAYMENT ID');
        throw new Error('no payment id');
      }
      paymentId = JSON.parse(paymentId);
      if (!paymentId) {
        console.log('NO PAYMENT ID');
        throw new Error('no payment id');
      }
      const payment = await this.apiService.getSinglePayment(paymentId);
      this.paid = payment.paid;
      this.status = payment.status;
      if (!this.paid && this.status !== 'succeeded') {
        console.log('order not paid');
        throw new Error('order not paid');
      }
      console.log(payment);

      await this.apiService.createPdfAndSaveOrder('Оплачено');
    } catch (error) {
      console.log('order failed');
    } finally {
      this.setLoader(false);
      this.resetLocalStorage();
    }
  }

  setLoader(bool: boolean) {
    this.loading = bool;
    console.log('loader set to', this.loading);
  }

  isLoading() {
    return this.loading;
  }

  resetLocalStorage() {
    window.localStorage.removeItem('starmap-customer');
    window.localStorage.removeItem('starmap-paymentId');
    this.cartService.clearCart();
  }
}
