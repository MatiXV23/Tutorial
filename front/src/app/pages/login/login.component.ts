import { Component, OnInit } from '@angular/core';
import { IonCard, IonCardContent, IonCardTitle,  IonInput, IonButton, IonInputPasswordToggle } from "@ionic/angular/standalone";
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  standalone: true,
  imports: [RouterModule, IonButton, IonInput, IonCard, IonCardTitle, IonCardContent, IonInputPasswordToggle]
})
export class LoginComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
