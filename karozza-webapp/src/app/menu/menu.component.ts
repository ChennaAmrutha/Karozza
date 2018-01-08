import { Component, OnInit } from '@angular/core';
import { MenuOptions } from '../Models/menu';
import { ConstantService } from '../_services/constant.service';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
   menuOptions;
   showNavbar : boolean;
  constructor(private  constantservice : ConstantService) { 
    this.showNavbar =  this.constantservice.showNavbar;
  }
  ngOnInit() {
    this.menuOptions = new MenuOptions().menu;
  }
}
