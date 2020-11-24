import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject, BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SupplierServiceService {
  items = [];
  constructor(private _httpClient: HttpClient) { }

  getShippingDetails() {
    return this._httpClient.get('/assets/exportedfile.json');
  }


  // userName = new Subject<any>(); // its a sub its a type of observables..

    userName = new BehaviorSubject(' Jaya Krishna...');
}
