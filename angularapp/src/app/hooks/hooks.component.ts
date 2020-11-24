import { Component, OnInit, Input, OnChanges, SimpleChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-hooks',
  templateUrl: './hooks.component.html',
  styleUrls: ['./hooks.component.css']
})
export class HooksComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  @Input() Myvalue = "Mister.."

  counter;
  num: number = 1;
  constructor() {
    console.log('constructor called')
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnCHanges called');
    // console.log(changes);
    // console.log( "ng Onchanges called " + ' ' + changes.Myvalue.currentValue);
  }
  ngOnInit(): void {
    console.log('ngOninit called');

    this.counter = setInterval(() => {
      this.num = this.num + 1;
      console.log(this.num);
    }, 1000);
  }

  ngDoCheck() {
    console.log('called NG do check')
  }

  ngAfterContentInit() {
    // for ng content inisalised when content projected...
    console.log('ng AfterContentInit called....');
  }

  ngAfterContentChecked() {
    console.log('ng AfterContent Checked.. called.');
  }

  ngAfterViewInit() {
    console.log(' ngAfterViewInit called'); //component fully intialised it was called
  }

  ngAfterViewChecked() {
    console.log('ngafterViewChecked called'); // after all renderes viewchecked called...
  }

  ngOnDestroy() {
    console.log(' Component Destroyed'); // called before....deleteing
     clearInterval(this.counter);
  }
}
