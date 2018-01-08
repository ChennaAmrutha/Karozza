import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Http } from '@angular/http';
import { Router } from '@angular/router';
import { LoginService } from './login.service';
import { ConstantService} from '../_services/constant.service'
import { User } from '../Models/user'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers : [LoginService]
})
export class LoginComponent implements OnInit {
  user : FormGroup;
  showNavBar: boolean = false;
  constructor( private http : Http , private loginService : LoginService, private router :Router,
              private constantservice : ConstantService
              ) { }

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
    /*var User = new User();
    User.setUserId(user.userid);
    User.setPassword(user.password);*/
    this.loginService.validateUser({"userid":user.id,"password":user.password}).subscribe(res => {
     console.log(res.text);
     alert(this.constantservice.showNavbar);
     this.constantservice.showNavbar = true;
      this.router.navigate(['/home']);
   })
  }
}
