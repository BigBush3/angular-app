import { Injectable } from '@angular/core';
import { CdekCity } from '../models/api.interfaces';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root',
})
export class CitiesService {
  rusCities: CdekCity[] = [];
  kazCities: CdekCity[] = [];
  belCities: CdekCity[] = [];
  armCities: CdekCity[] = [];
  kirCities: CdekCity[] = [];

  constructor(private apiService: ApiService) {}

  async initCities() {
    this.rusCities = await this.apiService.getCdekCities('RU');
    this.armCities = await this.apiService.getCdekCities('AM');
    this.belCities = await this.apiService.getCdekCities('BY');
    this.kazCities = await this.apiService.getCdekCities('KZ');
    this.kirCities = await this.apiService.getCdekCities('KG');
    if (!this.rusCities || !this.armCities || !this.belCities || !this.kazCities || !this.kirCities) {
      console.log('retrying fetch cities');
      await this.initCities();
    }
    console.log('successfully inited cities');
  }
}
