import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
@Injectable()
export class DataService {
  private loggedIn = new BehaviorSubject<boolean>(false);
  currentStatus = this.loggedIn.asObservable();
  constructor() { }
  changeStatus(message) {
    this.loggedIn.next(message);
  }
}