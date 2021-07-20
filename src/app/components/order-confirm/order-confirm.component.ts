import { Component, OnInit } from '@angular/core';
import { ResponseOrder } from '../../models/api.interfaces';
import { ApiService } from '../../services/api.service';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-order-confirm',
  templateUrl: './order-confirm.component.html',
  styleUrls: ['./order-confirm.component.css']
})
export class OrderConfirmComponent implements OnInit {
  order: ResponseOrder = null!;

  constructor(private apiService: ApiService, private cartService: CartService) { }

  async ngOnInit() {
    const orderId = window.localStorage.getItem('starmap-order');
    if (!orderId) {
      throw new Error('No order id');
    }
    const order = await this.apiService.findOrder(Number(orderId));
    console.log(order);
    this.order = order;
    this.resetLocalStorage();
  }

  resetLocalStorage() {
    this.cartService.clearCart();
    window.localStorage.removeItem('starmap-customer');
    window.localStorage.removeItem('starmap-order');
  }

}
