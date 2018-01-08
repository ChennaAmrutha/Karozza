import { Component } from '@angular/core';
import {ConstantService } from './_services/constant.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers : [ConstantService]
})
export class AppComponent {
  title = 'app';
  constructor( private constantservice : ConstantService){
    this.constantservice.showNavbar  = true;
  }
}
