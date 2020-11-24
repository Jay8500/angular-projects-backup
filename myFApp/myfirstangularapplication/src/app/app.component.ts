import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myfirstangularapplication';

  public todolist;

  public todoarray = [];

  public itemchecked = false;

  public show = false;

  public display = false;

  public date =  new Date();

  // persist the data in some space... which could not deprecate...
  mydata;

  ngOnInit() {

  }

  pushit() {
    this.todoarray.push(this.todolist);
    console.log( 'before the checknox ', this.itemchecked);
    this.todolist = '';
    console.log(this.todoarray);
    this.display = true;
    this.mydata = JSON.stringify(this.todoarray);
    localStorage.setItem('key', this.mydata);
  }

  popit(f) {
      console.log(this.todoarray[f], 'index of array' + f);
    // });

  }
}
