import { Component } from '@angular/core';
import { SupplierServiceService } from './supplier-service.service';
import { SharedServiceService } from './shared-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularapp';

  public shippingdetails;
  constructor( private _supplierService : SupplierServiceService, private _fetchApi : SharedServiceService){
         this._supplierService.userName.subscribe( (uname)=>{
                 this.userName = uname;
         })

  }

   products;
   ngOnInit(){
     this._fetchApi.products().subscribe( proddata => this.products = proddata);
   }
  getShippingDetails() {
    this._supplierService.getShippingDetails().subscribe(
          (data: any[]) => {
            // console.log(data);
            this.shippingdetails = data;
          }
  ); 
}

// userName:string = 'uxtrendz'; // for subject;
userName;
values = new Date();
}
