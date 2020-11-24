import { Component, OnInit, ɵNOT_FOUND_CHECK_ONLY_ELEMENT_INJECTOR } from '@angular/core';
import { Router} from '@angular/router';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  public signing = {
    name: '',
    passwords: '',
    confpassword: ''

  }

  public arra = [];
  ad;
  

  constructor(public r: Router) { }
  ngOnInit(): void {
  }

  submit() {
    this.ad = JSON.parse(JSON.stringify(this.signing))
    this.arra.push(this.ad);
    var g = JSON.parse(JSON.stringify(this.arra));
    // console.log(this.arra);
    // console.log(g);
    var gr = JSON.stringify(g);
    localStorage.setItem('userLogins', gr);
    // console.log( localStorage.getItem('userLogins'));
    this.signing.name = '';
    this.signing.passwords = '';
    this.signing.confpassword = '';
  }

  nav(){
    this.r.navigateByUrl("/login");
  }

}
