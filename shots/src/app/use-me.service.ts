import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Global } from '../app/global';
@Injectable({
  providedIn: 'root',
})
export class UseMeService {
  public apiHostlUrl = "http://localhost:3000/jay/pluggerSet";
  public geturl = "http://localhost:3000/jay/pluggersget";
  public gender = "http://localhost:3000/jay/gendersList";
  public masterApi = "";
  public configApi;
  public masterUrl = "";
  public dataJson = "assets/data.json";
  constructor(private _http: HttpClient, private _global: Global) { }

  async jsonfilesget() {
    let promise;
    await this._global.getConfigData().toPromise().then(res => promise = res);
    this.configApi = promise;
    this.masterApi = this.configApi["UsersApi"];
  }

  setmasterApi(keysprop, keys) {
    let keysProp = this.configApi[keysprop];
    this.masterUrl = keysProp;
    console.log(this.masterUrl[keys]);

    return this.masterUrl;
  }


  async insertionForPost(insertion: any) {
    let resultData;
    var httpHeader = new HttpHeaders({
      'ContentType': 'application/json; charset=utf-8',
    })
    await this._http.post(this.masterApi + 'pluggerSet', insertion, { headers: httpHeader }).toPromise().then((res) => {
      resultData = res;
    });
    console.log(this.masterApi);
    console.log(this.masterUrl);
    return resultData;
  }

  getbyall() {
    return this._http.get(this.geturl);
  }

  getGender() {
    return this._http.get(this.gender);
  }

}

