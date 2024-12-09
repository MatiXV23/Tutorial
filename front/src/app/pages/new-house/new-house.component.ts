import { Component, inject, OnInit } from '@angular/core';
import { IonCard, IonInput, IonCheckbox, IonIcon, IonButton, IonCardTitle, IonCardHeader, IonCardSubtitle, IonCardContent } from "@ionic/angular/standalone";
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { HousingService } from 'src/app/services/housing.service';
import { HousingLocationPost } from 'src/types/housing-location';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { delay } from 'rxjs';

@Component({
  selector: 'app-new-house',
  templateUrl: './new-house.component.html',
  styleUrls: ['./new-house.component.scss'],
  standalone: true,
  imports: [CommonModule, IonCardSubtitle, IonCardTitle, IonButton, IonCheckbox, IonInput, IonCard, ReactiveFormsModule ]
})
export class NewHouseComponent  implements OnInit {
  newHouseForm = new FormGroup({
    nombre: new FormControl(""),
    city: new FormControl(""),
    photo: new FormControl(""),
    units: new FormControl(0),
    wifi: new FormControl(false),
    laundry: new FormControl(false),
  });
  
  housingService = inject(HousingService);
  error = false;
  errorMsg = "";
  succes = false;

  router = inject(Router)

  constructor() { }

  ngOnInit() {}

  async onClick(){
    const newHousingLocation : HousingLocationPost = {
      nombre: this.newHouseForm.value.nombre ?? "",
      city: this.newHouseForm.value.city ?? "",
      photo: this.newHouseForm.value.photo ?? "",
      units: this.newHouseForm.value.units ?? 0,
      wifi: this.newHouseForm.value.wifi ?? false,
      laundry: this.newHouseForm.value.laundry ?? false,
    }
    try {
      this.verifyForm()
      await this.housingService.createHousingLocation(newHousingLocation)
      this.succes = true;
      this.error = false;
      this.router.navigate(['../']);
    }
    catch (Error){
      this.succes = false;
      this.error = true;
      this.errorMsg = "Rellena todos los campos correctamente"
    }
  }


  private verifyForm(){
    const value = this.newHouseForm.value;
    if (value.nombre == "" || value.city == "" || value.photo == ""){
      throw new Error("Rellena todos los campos correctamente");
    }
      
    return;
  }
}
