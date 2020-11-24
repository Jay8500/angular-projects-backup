import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-playistslist',
  templateUrl: './playistslist.component.html',
  styleUrls: ['./playistslist.component.css']
})
export class PlayistslistComponent implements OnInit {
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
  public firstname = "";
  public uUrl = "fa fa-user";
  public imgUrl = "assets/images/jackson.jpg";
  public id:any;
  public errorMsg = {
    "firstnameerr" : [
     { "wow" : "boost" }
    ]
  }
  geterror(ctrl){
   switch(ctrl){
     case 'firstname':
       alert('blurred');
       this.errorMsg.firstnameerr = [
         { "wow" : "changed"}
       ];
   }
  }
  constructor(private rl: Router,) {
   }
  ngOnInit() {
    
   }
  playists(displaylist) {
    this.rl.navigate(['/playistsdetail',displaylist.id]);
  }

}
