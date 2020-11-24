import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from 'events';

@Component({
  selector: 'p-input',
  templateUrl: './inputdirective.component.html'
})
export class InputdirectiveComponent implements OnInit {
 @Input() public bind;
 @Output()  chs:EventEmitter = new EventEmitter();

 public sarr = [];
  constructor() { }

  ngOnInit() {
  }
  w(){
    this.chs.emit(this.bind);
  }
}
