import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SharedServiceService {

  constructor(private _fetchingApi :HttpClient) { }

 url = "https://jsonplaceholder.typicode.com/users";
  products() : Observable<any>{
       return this._fetchingApi.get(this.url);
  }
}
