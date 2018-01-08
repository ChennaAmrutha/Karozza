import { Injectable } from '@angular/core';

@Injectable()
export class ConstantService {
   BASE_URL = "http://httpbin.org"; 
   showNavbar : boolean = false;
  constructor() { }
  ngOninit(){
   
  }
}
