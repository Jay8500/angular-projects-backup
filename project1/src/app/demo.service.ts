import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class DemoService {

  myass = "assets/config.json"

  constructor(private http : HttpClient) { }

  addTheApi(){
   return this.http.get(this.myass);
  }
}
