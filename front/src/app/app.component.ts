import { CommonModule } from '@angular/common';
import { Component} from '@angular/core';
import { IonHeader, IonChip, IonAvatar, IonLabel, IonImg } from "@ionic/angular/standalone";
import { RouterModule } from '@angular/router';
import { User } from 'src/types/user';
@Component({
  selector: 'app-root', 
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: true,
  imports: [ IonLabel, IonAvatar, IonChip, RouterModule, IonHeader, CommonModule],
})

export class AppComponent {
  title = "home";
  userName = "Log In";
  logged: boolean = false;
  user: User;
  constructor() {
    this.user = {nombre: "Pepe", id: 1, email: "pepe@gmail.com"} 
    this.logged = false;
  }
}

