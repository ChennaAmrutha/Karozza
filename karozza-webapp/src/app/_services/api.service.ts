import { Injectable } from '@angular/core';
import { ConstantService } from './constant.service';
import { Http } from '@angular/http';
@Injectable()
export class ApiService {
  data: any;
  result: any;

  constructor(private http : Http) { }

  static geturl(path) {
    //var apiurl = ConstantService.API_URL[group][url];
   // if (typeof url == 'undefined') {
     //   return '';
    //}
    alert("dfkj00");
    return "http://httpbin.org/" + path;
  }

  post(url, data) {
      this.data = data;
  
      return this.http.post(url, this.data);
  }

  update() {
  
  }

  put() {
  
  }
}
