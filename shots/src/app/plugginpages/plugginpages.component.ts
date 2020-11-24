import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
@Component({
  selector: 'app-plugginpages',
  templateUrl: './plugginpages.component.html',
  styleUrls: ['./plugginpages.component.css']
})
export class PlugginpagesComponent implements OnInit {

  public backendData = [
    {
      id: 1,
      uDsplyNme: "Jaya Krishna",
      imagesUrl: { uUrl: "fa fa-user", userUrl: "assets/images/jackson.jpg" },

    },
    {
      id: 2,
      uDsplyNme: "Micheal Jackson",
      imagesUrl: { uUrl: "fa fa-user", userUrl: "assets/images/sk.jpg" }
    },
    {
      id: 3,
      uDsplyNme: "Jackson",
      imagesUrl: { uUrl: "fa fa-user", userUrl: "assets/images/sk.jpg" }
    }
  ]
  public uUrl = "fa fa-user";
  public imgUrl = "assets/images/jackson.jpg";
  public id:any;
  constructor(private rl: Router, private aR:ActivatedRoute) {
   }
  ngOnInit() {
    
   }
  pluggin(index) {
    this.rl.navigateByUrl(`pluggin/${this.id}`)
  }
}
