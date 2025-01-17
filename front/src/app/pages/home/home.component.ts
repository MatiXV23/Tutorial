import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonSearchbar, IonButton, IonGrid, IonRow, IonCol, IonContent, IonFooter, IonToolbar, IonTitle } from "@ionic/angular/standalone";
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { HousingLocation } from '../housing-location/housing-location';
import { HousingService } from 'src/app/services/housing.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: true,
  imports: [IonCol, IonRow, IonGrid, IonButton, IonSearchbar, HousingLocationComponent, CommonModule]
})
export class HomeComponent  implements OnInit {
  housingLocationList: HousingLocation[] = [];
  housingService: HousingService = inject(HousingService);
  filteredLocationList: HousingLocation[] = []; 

  constructor() {
    this.housingService.getAllHousingLocation().then((housingLocationList: HousingLocation[]) =>{
      this.housingLocationList = housingLocationList;
      this.filteredLocationList = housingLocationList;
    })
   }

  ngOnInit() {}


  filterResults(filter: string){ 
    if (!filter) this.filteredLocationList = this.housingLocationList;

    this.filteredLocationList = this.housingLocationList.filter(housingLocation => housingLocation?.city.toLowerCase().includes(filter.toLowerCase())  )
  }
  
}
