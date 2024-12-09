import { inject, Injectable } from '@angular/core';
import { HousingLocation, HousingLocationPost } from '../../types/housing-location';
import { map, Observable } from 'rxjs';
import { HttpClient} from '@angular/common/http';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})

export class HousingService {

  apiService = inject(ApiService)

  constructor() {  }
  
  async getAllHousingLocation(): Promise<HousingLocation[]> {
    return await this.apiService.get<HousingLocation[]>("housingLocation");
  }  

  async getHousingLocationById(id: number): Promise<HousingLocation>{
    return await this.apiService.get<HousingLocation>(`housingLocation/${id}`);
  }

  contactApplication(firstName: string, lastName: string, email: string){
    console.log(firstName, lastName, email)
  }

  async createHousingLocation(newHousing: HousingLocationPost){
    return await this.apiService.post<HousingLocation>(`housingLocation`, JSON.stringify(newHousing));
  }
}
