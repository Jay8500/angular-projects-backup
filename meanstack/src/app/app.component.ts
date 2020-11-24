import { Component, OnInit } from '@angular/core';
import { CommonserviceService} from './commonservice.service';
// import { Http, Response, Headers, RequestOptions} from '@angular/common/commonhttp';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'meanstack';
  Repdata;

  constructor(private newserv : CommonserviceService){}

  ngOnInit(){
   this.newserv.GetUser().subscribe( data => this.Repdata = data)
  }
}
