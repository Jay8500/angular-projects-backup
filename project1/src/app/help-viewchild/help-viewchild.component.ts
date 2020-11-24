import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-help-viewchild',
  templateUrl: './help-viewchild.component.html',
  styleUrls: ['./help-viewchild.component.css']
})
export class HelpViewchildComponent implements OnInit {

  @Input() da = "Hello ViewChild"
  constructor() { }

  ngOnInit(): void {
  }

}
