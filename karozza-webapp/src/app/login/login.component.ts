import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from './login.service';

import { User } from '../Models/user';
import {DataService} from '../data.service'
import {Globals } from '../global'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers : [LoginService,Globals]
})
export class LoginComponent implements OnInit {
  user : FormGroup;
  constructor( private loginService : LoginService, private router :Router,
             private dataService : DataService ,private fb : FormBuilder
              ) {  
                
              }

  ngOnInit() {
    /*this.user = new FormGroup({
      userid : new FormControl("",[Validators.required]),
      password : new FormControl("",[Validators.required,Validators.minLength(6)])
    });*/
    
   this.user = this.fb.group({
      userid : ['', [Validators.required]],
      password : ['',[Validators.required,Validators.minLength(6)]]
    });


  }
  onSubmit(user){
    /*user = new User();
    user.setUserId(user.userid);
    user.setPassword(user.password);*/
    this.loginService.validateUser({"userid":user.id,"password":user.password}).subscribe(res => {
     console.log(res);
     /*res.data={"user":{"userid":"104","role":"manager"}};
     console.log(res.data.user.role);
      user.setRole(res.data.user.role);*/
     // console.log(user.getRole());
     this.dataService.setUserRole("manager");
      this.router.navigate(['/home/updateAddress']);
   })
  }
}
