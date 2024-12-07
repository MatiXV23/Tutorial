import { inject, Injectable } from '@angular/core';
import { HousingLocation} from '../pages/housing-location/housing-location';
import { map, Observable } from 'rxjs';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class HousingService {
  url = "http://localhost:3000/housingLocation"
  
  url2 = "http://localhost:5000/locations"  
  http: HttpClient = inject(HttpClient)

  constructor() {  }

  getAllHousingLocation(): Observable<HousingLocation[]>{
    return this.http.get<HousingLocation[]>(this.url);
  }

  getHousingLocationById(id: number): Observable<HousingLocation>{
    return this.http.get<HousingLocation>(`${this.url}/${id}`);
  }

  async getAllHousingLocation2(): Promise<HousingLocation[]>{
    const data = await fetch(this.url)
    return data.json() ?? []
  }

  
  async getHousingLocationById2(id: number): Promise<HousingLocation | undefined> {
    const data = fetch(`${this.url}/${id}`);
    return (await data).json() ?? {};
  }

  contactApplication(firstName: string, lastName: string, email: string){
    console.log(firstName, lastName, email)
  }

}
