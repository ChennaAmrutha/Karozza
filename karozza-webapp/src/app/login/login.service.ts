import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { User } from '../Models/user';
import {Observable} from 'rxjs/Rx';
import 'rxjs/Rx';
import {Globals} from '../global';


@Injectable()
export class LoginService {
 format ={
    title: 'foo',
    body: 'bar',
    userId: 1
  };
  constructor(private http : HttpClient, private globals : Globals) { }
  /*validateUser(user){
    return this.http.post(this.globals.apiUrl+'/posts',this.format)
    .map((response: Response) => {
        return response.json();
    });   
  }*/
validateUser(user: any){
  alert("posting");
  return this.http.get("http://httpbin.org/get")
  //return this.http.post("http://httpbin.org", JSON.stringify({user}))
  .map((response: Response) => {
      return response;
  });
}

}
interface UserResponse {
  title : any,
  body : any,
  userId: any

}

