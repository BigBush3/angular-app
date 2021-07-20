import { Component, OnInit } from '@angular/core';
import celestial from 'd3-celestial';

import { CartProduct, OrderType, Size } from '../../models/cart.interfaces';
import { config } from './config';
import { ruCities, City } from './citiesRU';
import { CartService } from '../../services/cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-constructor',
  templateUrl: './constructor.component.html',
  styleUrls: ['./constructor.component.css'],
})
export class ConstructorComponent implements OnInit {
  orderType: OrderType = this.cartService.currentProduct.type || 'print';
  size: Size = this.cartService.getCurrentProductSize();
  totalPrice = this.cartService.getCurrentProductPrice();
  currentColor = this.cartService.currentProduct.template || 'black';
  textColor = this.currentColor === 'black' ? 'white' : 'black';
  cityToSearch = '';
  day = new Date().getDate().toString();
  month = (new Date().getMonth() + 1).toString();
  year = new Date().getFullYear().toString();
  time = '';
  hour = '10';
  minutes = '12';
  title = '';
  message = '';
  subtitle = '';
  cityCoordinates = '';
  fullDate = '';
  showTime = true;
  showCoordinates = true;
  map: any;
  cities: City[] = ruCities;
  foundCities: City[] = [];
  mapConfig = config;
  constructor(private cartService: CartService, private router: Router) {}

  ngOnInit(): void {
    this.map = new celestial.Celestial();
    this.map.display(this.mapConfig);
    this.updatePriceTotal();
    const canvas = document.getElementById(
      'starmap-canvas'
    ) as HTMLCanvasElement;
    console.log(canvas.width, canvas.height);
    const spb = this.cities.find((city) => city.region.toLowerCase().includes('санкт-петербург'));
    if (spb) {
      this.setCity(spb);
    }
  }

  counter(i: number) {
    return Array(i);
  }

  getFullDate() {
    return this.fullDate;
  }

  async handleGraticule(): Promise<void> {
    this.mapConfig.lines.graticule.show = !this.mapConfig.lines.graticule.show;
    this.map.apply(this.mapConfig);
  }

  searchCity() {
    this.foundCities = this.cities.filter((city) => {
      const byName = city.name
        .toLowerCase()
        .includes(this.cityToSearch.toLowerCase());
      const byRegion = city.region
        .toLowerCase()
        .includes(this.cityToSearch.toLowerCase());
      return byName || byRegion;
    });
    console.log(this.foundCities);
  }

  setTemplate(template: string) {
    this.currentColor = template;
    this.cartService.setTemplate(this.currentColor);
  }

  setCity(city: City) {
    const newDate = new Date(+this.year, +this.month - 1, +this.day);
    // this.cityCoordinates = `${city.latitude}/${city.longtitude}`;
    this.cityToSearch = city.name.length > 1 ? city.name : city.region;
    this.title = 'Так сложились звёзды в тот самый день';

    this.message = 'Звездное небо';
    this.subtitle = `над ${this.cityToSearch}`;
    // if (this.showCoordinates) {
    //   this.coordinates = this.cityCoordinates;
    // }
    this.updateFullDate();
    this.map.location([city.latitude.toString(), city.longtitude.toString()]);
    this.map.date(newDate);
  }

  updateFullDate() {
    this.fullDate = `${this.day} ${this.toMonth(this.month)} ${this.year}г.`;
    const minutes = +this.minutes < 10 ? '0' + this.minutes : this.minutes;
    if (this.showTime) {
      this.fullDate = this.fullDate.concat(` в ${this.hour}:${minutes}`);
    }
  }

  setOrderType(type: OrderType) {
    this.orderType = type;
    this.cartService.updateOrderType(type);
    this.updatePriceTotal();
  }

  changeDate() {
    const newDate = new Date(+this.year, +this.month - 1, +this.day, +this.hour+1, +this.minutes);
    console.log(newDate);
    this.map.date(newDate);
    this.updateFullDate();
    // this.subtitle = `${this.day} ${this.toMonth(this.month)} ${this.year}г.`;
  }

  async handleConstellations(): Promise<void> {
    this.mapConfig.constellations.lines = !this.mapConfig.constellations.lines;
    this.map.apply(this.mapConfig);
  }

  async handleMilkyWay(): Promise<void> {
    this.mapConfig.mw.show = !this.mapConfig.mw.show;
    this.map.apply(this.mapConfig);
  }

  handlePreview(): string {
    let preview = '';
    preview = preview.concat(`${this.currentColor}-`);
    if (this.mapConfig.lines.graticule.show) {
      preview = preview.concat('gr-');
    }
    if (this.mapConfig.constellations.lines) {
      preview = preview.concat('con-');
    }if (this.mapConfig.mw.show) {
      preview = preview.concat('mw');
    }
    return preview;
  }

  toMonth(num: string) {
    const months = [
      'Января',
      'Февраля',
      'Марта',
      'Апреля',
      'Мая',
      'Июня',
      'Июля',
      'Августа',
      'Сентября',
      'Октября',
      'Ноября',
      'Декабря',
    ];
    return months[+num - 1];
  }

  async addToCart() {
    await this.map.exportSVG(async (SVG: any) => {
      const newProduct: CartProduct = {
        ...this.cartService.currentProduct,
        preview: this.handlePreview(),
        poster: {
          canvas: SVG,
          template: this.currentColor,
          size: this.size,
          text: {
            title: this.title,
            subtitle: this.subtitle,
            message: this.message,
            color: this.textColor,
            coordinates: '',
            fullDate: this.fullDate
          },
        },
        quantity: 1,
      };
      await this.cartService.saveProduct(newProduct);
      this.router.navigate(['/checkout']);
    });
  }

  setShowTime(show: boolean) {
    this.showTime = show;
    this.changeDate();
  }

  // setShowCoordinates(show: boolean) {
  //   this.showCoordinates = show;
  //   this.coordinates = this.showCoordinates ? this.cityCoordinates : '';
  // }

  updatePriceTotal() {
    const sizeToPrice = {
      '21x30': 2300,
      '30x40': 2700,
      '40x50': 3200,
      '50x70': 4000,
    };
    let priceFormula = sizeToPrice[this.size];
    if (this.orderType === 'pdf-only') {
      priceFormula = 1300;
    }
    this.cartService.updatePrice(priceFormula);
    this.totalPrice = this.cartService.getCurrentProductPrice();
    this.cartService.updatePriceTotal();
  }

  getCartAndUpdateSize() {
    this.cartService.updateSize(this.size);
    this.updatePriceTotal();
  }
}
