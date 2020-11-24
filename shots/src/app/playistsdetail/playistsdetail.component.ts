import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-playistsdetail',
  templateUrl: './playistsdetail.component.html',
  styleUrls: ['./playistsdetail.component.css']
})
export class PlayistsdetailComponent implements OnInit {
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
  public playistsId;
  constructor(private rl: Router, private aR: ActivatedRoute) {
  }
  ngOnInit() {
    let id = parseInt(this.aR.snapshot.paramMap.get('id'));
    this.playistsId = id;
  }
}
