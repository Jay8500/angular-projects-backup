import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-logins',
  templateUrl: './logins.component.html',
  styleUrls: ['./logins.component.css']
})
export class LoginsComponent implements OnInit {


  public l = {
      p : '',
      n : ''
  }

  public ar = [];

  public username : ''
  constructor(private r: Router) { }

  ngOnInit(): void {
  }

  nav() {
    this.r.navigateByUrl("/signup");
  }

  logins() {
    let ae = JSON.parse(localStorage.getItem('userLogins'));
    if(this.l.n || this.l.p === ae){
      this.r.navigateByUrl('/yourtodos');
      this.ar.push(this.l.n);
      console.log(this.ar);
    }
    this.l = { p : '', n : ''};
  }

}
