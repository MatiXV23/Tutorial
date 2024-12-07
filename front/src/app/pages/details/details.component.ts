import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { HousingService } from 'src/app/services/housing.service';
import { HousingLocation } from '../housing-location/housing-location';
import { IonGrid, IonRow, IonCol, IonCardSubtitle, IonCardTitle, IonCardHeader, IonCard, IonLabel, IonItem, IonList, IonButton, IonInput } from "@ionic/angular/standalone";
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-details', 
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
  standalone: true,
  imports: [IonInput, IonButton, IonList, IonItem, IonLabel, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCol, IonRow, IonGrid, CommonModule, ReactiveFormsModule]
})

export class DetailsComponent  implements OnInit {
  route: ActivatedRoute = inject(ActivatedRoute);
  housingService: HousingService = inject(HousingService);
  housingLocation: HousingLocation | undefined;
  contactForm = new FormGroup({
    firstName: new FormControl(""),
    lastName: new FormControl(""),
    email: new FormControl(""),
  }) 

  constructor() {
    const housingLocationId = Number(this.route.snapshot.params['id'])
    this.housingService.getHousingLocationById(housingLocationId).subscribe( res => 
      this.housingLocation = res);
   }
   
  ngOnInit() {}

  contactApplication(){
    this.housingService.contactApplication(
      this.contactForm.value.firstName ?? "",
      this.contactForm.value.lastName ?? "",
      this.contactForm.value.email ?? ""
    )
  }
}
