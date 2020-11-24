import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http'

@Injectable()
export class Global{
    constructor(private _http:HttpClient){
    }
    public getConfigData(){
      return this._http.get('assets/data.json');
    }
}