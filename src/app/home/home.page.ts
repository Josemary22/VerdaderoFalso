import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {CommonModule} from "@angular/common";
import {IonicModule} from "@ionic/angular";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonicModule, CommonModule],
  standalone: true
})
export class HomePage {
  constructor(private router: Router) {}

  navigateToPrimaria() {
    this.router.navigate(['/primaria']);
  }

  navigateToEso() {
    this.router.navigate(['/eso']);
  }
}
