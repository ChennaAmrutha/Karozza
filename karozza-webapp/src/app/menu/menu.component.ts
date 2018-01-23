import { Component, OnInit } from '@angular/core';
import { MenuOptions } from '../Models/menu';
import { ConstantService } from '../_services/constant.service';
import { User } from '../Models/user';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
   menuOptions;userMenu;userRole;
   showNavbar : boolean;
  constructor(private  constantservice : ConstantService) { 
    this.showNavbar =  this.constantservice.showNavbar;
  }
  ngOnInit() {
    this.userRole = 2;
    this.menuOptions = new MenuOptions().menu;
    console.log("dfaf"+new User().getRole());
    this.userMenu = this.menuOptions.filter(x=>((x.role).indexOf(this.userRole)!==-1))
  }
}
