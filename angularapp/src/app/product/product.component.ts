import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { SharedServiceService} from '../shared-service.service';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  constructor(private router: Router, private Ss: SharedServiceService) { }

  ngOnInit(): void {
  }
  heroes = [ 
       { id: 1,  name : 'jk'},
       { id: 2,  name : 'jk'},
       { id : 3 , name : 'jk'},
  ];

  goToPRoList(id){
     this.router.navigate(['/productlist', id])
  }


}
