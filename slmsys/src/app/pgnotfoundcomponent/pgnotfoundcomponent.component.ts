import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pgnotfoundcomponent',
  templateUrl: './pgnotfoundcomponent.component.html',
  styleUrls: ['./pgnotfoundcomponent.component.css']
})
export class PgnotfoundcomponentComponent implements OnInit {

  public pagenotfound = "404";
  constructor() { }

  ngOnInit() {
  }

}
