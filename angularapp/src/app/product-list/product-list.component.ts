import { Component, OnInit, OnDestroy } from '@angular/core';
import {  ActivatedRoute,  Router} from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit , OnDestroy{
  
  id: number;
  private sub: any;
  constructor(private aR:ActivatedRoute, private rt: Router) { }

  ngOnInit(): void {

    this.sub = this.aR.params.subscribe( params => {
      this.id = +params['id'];
    })

  }

  goBackToProduct(){
    this.rt.navigate(['/product']); // programmatically routing...
  }


  ngOnDestroy(){
     this.sub.unsubscribe(); 
  }
}
