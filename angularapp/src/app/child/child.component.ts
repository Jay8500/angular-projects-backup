import { Component, OnInit } from '@angular/core';
import { SupplierServiceService } from '../supplier-service.service';
import { SharedServiceService } from '../shared-service.service';
@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  // public exportData;
  constructor(private _suppli :  SupplierServiceService, _fetcApi : SharedServiceService) { 
      this._suppli.userName.subscribe( (uname) => {
          this.userName = uname;
      })

  }

  ngOnInit(): void {
  }

  updateUser(exportData){
    //  this.userName = exportData.value;
     this._suppli.userName.next(exportData.value)
  }

  // userName : string = "uxtrendz";
    userName;
}
