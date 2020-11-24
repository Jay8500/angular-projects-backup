import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'home-page',
  templateUrl: './home-landingpage.component.html',
  styleUrls: ['./home-landingpage.component.css']
})
export class HomeLandingpageComponent implements OnInit {

  public show = true;
  shows : boolean;
  misc;
  constructor() { }

  ngOnInit(): void {
  }
  togg(){

     this.show = true;
     this.misc = true;
  }
}
