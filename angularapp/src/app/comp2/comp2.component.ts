import { Component, OnInit } from '@angular/core';
import { SupplierServiceService } from '../supplier-service.service';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.css']
})
export class Comp2Component implements OnInit {
  // public exportData;
  constructor(private _suppli :  SupplierServiceService) { 
    this._suppli.userName.subscribe( (uname) => {
        this.userName = uname;
    })
}

  ngOnInit(): void {
  }
  updateUser(exportData) {
    // this.userName = exportData.value;
    this._suppli.userName.next(exportData.value)

  }
  // userName : string = "uxtrendz";
     userName;
}
