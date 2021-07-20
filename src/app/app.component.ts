import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { CartService } from './services/cart.service';
import { CitiesService } from './services/cities.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'star-project-frontend';

  constructor(private cartService: CartService, private citiesService: CitiesService) {}

  ngOnInit() {
    this.cartService.init();
    this.citiesService.initCities();
  }
}
