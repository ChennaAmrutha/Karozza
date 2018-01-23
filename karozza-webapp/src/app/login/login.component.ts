import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Http } from '@angular/http';
import { Router } from '@angular/router';
import { LoginService } from './login.service';
import { ConstantService} from '../_services/constant.service'
import { User } from '../Models/user';
import {DataService} from '../_services/share.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers : [LoginService]
})
export class LoginComponent implements OnInit {
  user : FormGroup;message;
  @Output() logInEvent = new EventEmitter<boolean>();
  constructor( private http : Http , private loginService : LoginService, private router :Router,
              private constantservice : ConstantService , private dataService : DataService
              ) {  
                
              }

  ngOnInit() {
    this.user = new FormGroup({
      userid : new FormControl("",[Validators.required]),
      password : new FormControl("",[Validators.required,Validators.minLength(6)])
    });
    
   /* this.user = this.fb.group({
      userid : ['', [Validators.required]],
      password : ['',[Validators.required,Validators.minLength(6)]]
    });
*/

  }
  onSubmit(user){
    user = new User();
    user.setUserId(user.userid);
    user.setPassword(user.password);
    this.loginService.validateUser({"userid":user.id,"password":user.password}).subscribe(res => {
     console.log(res);
     res.data={"user":{"userid":"104","role":"manager"}};
     console.log(res.data.user.role);
     this.logInEvent.emit(true);

    // alert(this.constantservice.showNavbar);
     //this.constantservice.showNavbar = true;
     t:boolean = this.dataService.changeStatus(false);
     console.log(this.dataService.currentStatus);
      user.setRole(res.data.user.role);
      console.log(user.getRole());
      this.router.navigate(['/home']);
   })
  }
}
