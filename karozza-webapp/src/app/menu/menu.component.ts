import { Component, OnInit } from '@angular/core';
import { MenuOptions } from '../Models/menu';

import { User } from '../Models/user';
import { DataService } from '../data.service';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
   menuOptions;userMenu;userRole;
   showNavbar : boolean;
  constructor(private dataService : DataService) { 
  }
  ngOnInit() {
   this.userRole =  this.dataService.getUserRole();
   console.log(this.userRole+"jd");

    this.menuOptions = new MenuOptions().menu;
    console.log(this.menuOptions);
   // console.log("dfaf"+new User().getRole());
    this.userMenu = this.menuOptions[this.userRole];
    console.log(this.userMenu);
    
  }
}
