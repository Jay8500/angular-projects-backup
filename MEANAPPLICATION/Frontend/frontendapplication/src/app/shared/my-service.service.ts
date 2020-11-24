import { Injectable } from '@angular/core';
import { Employee} from './employee';
import { HttpClient} from '@angular/common/http';
// import { Observable} from 'rxjs/Observable';
// import'rxjs/add/operator/map';
// import'rxjs/add/operator/toPromise';

@Injectable({
  providedIn: 'root'
})
export class MyServiceService {

   SecondEmployee : Employee;
   employees      : Employee[];

  readonly basedUrl = "http://localhost:2000/jays/";

  readonly posturl = this.basedUrl + 'titles';

  constructor( private _http:HttpClient) { }

  postEmployee(emp : Employee){
   return this._http.post(this.posturl, emp);
  }

  getEmployeeList(){
     return this._http.get(this.basedUrl);
  }

  putEmployee(id : string){
     return this._http.put(this.basedUrl + `/${id}`, id);
  }

  deleteEmployee(id : string){
    return this._http.delete(this.basedUrl +`/${id}`);
  }
}
