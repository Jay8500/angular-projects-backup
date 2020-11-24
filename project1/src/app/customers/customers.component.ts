import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {

  @Input() data = "I am child";
  constructor() { }

  ngOnInit(): void {
  }

}
