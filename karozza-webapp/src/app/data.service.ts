import { Injectable } from '@angular/core';

@Injectable()
export class DataService {
  role:string;
  constructor() { }
  setUserRole(role){
  this.role = role;
  }
  getUserRole():string{
    return this.role;
  }
}
