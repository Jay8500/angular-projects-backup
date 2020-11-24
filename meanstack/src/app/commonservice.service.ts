import { Injectable } from '@angular/core';
// import { Response, Headers, http, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CommonserviceService {

  constructor(private http : HttpClient) { }

  saveUser(user){
    return this.http.post('http://localhost:8080/api/save/', user)
       .map(( response : Response) =>  response.json())
  }

  GetUser(){
    return this.http.get('http://localhost:8080/api/getuser/')
        .map(( response: Response ) => response.json())
  }

  deleteUser(id){
    return this.http.post('http://localhost:8080/api/delete/', {'id': id})
    .map((response: Response) => response.json());
  }
}
