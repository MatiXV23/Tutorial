import { Component, OnInit } from '@angular/core';
import { IonButton, IonCard, IonInput, IonCardTitle, IonInputPasswordToggle } from "@ionic/angular/standalone";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
  standalone: true,
  imports: [IonCardTitle, IonInput, IonCard, IonButton, IonInputPasswordToggle ]
})
export class SignUpComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
