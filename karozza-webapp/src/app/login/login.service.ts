import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { User } from '../Models/user';
import {Observable} from 'rxjs/Rx';
import 'rxjs/Rx';

@Injectable()
export class LoginService {

  constructor(private http : Http) { }

  validateUser(user){
    alert("posting");
    return this.http.get("http://httpbin.org/get")
    //return this.http.post("http://httpbin.org", JSON.stringify({user}))
    .map((response: Response) => {
        return response.json();
    });
  }

}
