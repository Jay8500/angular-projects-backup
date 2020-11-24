import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lifecycles',
  templateUrl: './lifecycles.component.html',
  styleUrls: ['./lifecycles.component.css']
})
export class LifecyclesComponent implements OnInit {

   hooksComp: boolean = true;
  constructor() { }

  ngOnInit(): void {
  }
   values:String;
  fun(myvals){
   this.values = myvals.value;
  }

  destroy(){
     this.hooksComp =  false;
  }
  //constructor
  // ng OnChanges
  // ng OnInit
  // ngDoCheck
  // ngAfterContentInit
  //ngAfterContentChecked.
  //ngAfterViewInit
  //ngAfterViewChecked
  //ngOnDestroy
}
