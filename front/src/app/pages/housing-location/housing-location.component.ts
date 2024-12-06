import { Component, Input, input, OnInit } from '@angular/core';
import { HousingLocation } from './housing-location';
import { CommonModule } from '@angular/common';
import { IonCol, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent} from "@ionic/angular/standalone";
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-housing-location',
  templateUrl: './housing-location.component.html',
  styleUrls: ['./housing-location.component.scss'],
  standalone: true,
  imports: [IonCardContent, IonCardSubtitle, IonCardTitle, IonCardHeader, IonCard, IonCol, RouterModule]
})
export class HousingLocationComponent  implements OnInit {
  @Input() housingLocation!:HousingLocation;
  constructor() { }

  ngOnInit() {}

}
