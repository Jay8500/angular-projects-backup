import { Component, OnInit } from '@angular/core';
import { ShareModule } from '../share/share.module'
import { FormBuilder } from '@angular/forms'
import * as _ from 'node_modules/lodash';
@Component({
  selector: 'app-logincomponent',
  templateUrl: './logincomponent.component.html',
  styleUrls: ['./logincomponent.component.css']
})
export class LogincomponentComponent implements OnInit {
  public contentTitle = "nopepost";
  public list = [];
  public loginsform = this._fb.group({
    logname: [''],
    logpssd: [''],
    logCpssd: ['']
  });


  public store = [];
  public clone = {};

  public errorMessages = {
    loginForm: "",
    loginPassword: "",
    loginCpassword: "",
    wow: ""
  }
  get loginControls() {
    return this.loginsform.controls;
  }

  constructor(private _sM: ShareModule,
    private _fb: FormBuilder) { }
  // dynamic binding of Min length, uppercase, lowercase, special characters, number
  public mimLen = 10;
  public uppercase = 3;
  public lowercase = 3;
  public specialcharacter = 2;
  public number = 2;

  //For displaying the Password Field values parameters.
  public blocked = true;
  public showticksmin = true;
  public showticksuppr = true;
  public showtickslwr = true;
  public showtickschrc = true;
  public showticksnum = true;
  getError(ctrl) {
    switch (ctrl) {
      case "logname":
        this.errorMessages.loginForm = (this.loginControls[ctrl].value == "" ||
          this.loginControls[ctrl].value == null ?
          "Login Name Required" : "");
        break;
      case "logpssd":
        this.errorMessages.loginPassword = (this.loginControls[ctrl].value == "" ||
          this.loginControls[ctrl].value == null ?
          "Login Psswd required" : "");
        this.validatePswd(ctrl);
        break;
      case "logCpssd":
        if (this.loginControls[ctrl].value == "") {
          this.errorMessages.loginCpassword = "Conform Password Is Required";
        } else if (this.loginControls[ctrl].value != "") {
          this.errorMessages.loginCpassword = (this.loginsform.controls.logpssd.value !=
            this.loginsform.controls.logCpssd.value
            ? "Didnt Match Pssd" : "");
        }
        break;
      case "wow":
        this.errorMessages.wow = "empty";

    }
  }

  validatePswd(ctrl) {
    var pass = this.loginControls[ctrl].value;
    this.showticksmin = (pass.length == this.mimLen ? false : true);
    console.log(pass);
    // if (pass.search(/[A-Z]/)) { this.showticksuppr = true } else { this.showticksuppr = false };
    // if (pass.search(/[a-z]/)) { this.showtickslwr = true } else { this.showtickslwr = false };
    // if (pass.search(/[!\@\#\$\+\*\^\;\:]/)) { this.showtickschrc = true } else { this.showtickschrc = false };
    // if (pass.search(/[0-9]/)) { this.showticksnum = true } else { this.showticksnum = false };

    var upper = 0, lower = 0, number = 0, special = 0;
    console.log("before ", upper, lower, number, special);
    for (let i = 0; i < pass.length; i++) {
      if (pass[i] >= "A" && pass[i] <= "Z") {
        upper++ // A -Z (Charset [65 - 90])
        this.showticksuppr = (upper == this.uppercase ? false : true);
        console.log(this.showticksuppr);
      }
      else if (pass[i] >= "a" && pass[i] <= 'z') {
        lower++ // a - z (Charset [97 - 122]) 
        this.showtickslwr = (lower == this.lowercase ? false : true);
      }
      else if (pass[i] >= "0" && pass[i] <= "9") {
        number++ // 0 to 9 (Charset Num [48 -57])
        this.showticksnum = (number == this.number ? false : true);
      }
      else special++;
      this.showtickschrc = (special == this.specialcharacter ? false : true);
    }
    console.log("After ", upper, lower, number, special);

  }
  public wow;
  ngOnInit() {
    this.list = [];
    this.list.push({ label: "male", value: "1" });

  }

  credentials() {
    this.blocked = false;
    console.log(this.loginsform.valid);
    this.clone = JSON.parse(JSON.stringify(this.loginsform.getRawValue()));
    this.loginsform.reset();
    this.store.push(this.clone);
    console.log(this.store);
  }
}
