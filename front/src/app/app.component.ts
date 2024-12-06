import { CommonModule } from '@angular/common';
import { Component} from '@angular/core';
import { IonHeader } from "@ionic/angular/standalone";
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root', 
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: true,
  imports: [RouterModule, IonHeader, CommonModule],
})

export class AppComponent {
  title = "home";

  constructor() {
   
   }
}
