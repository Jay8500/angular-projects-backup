import { Component, OnInit } from '@angular/core';
import { MyServiceService } from '../shared/my-service.service';
import { Employee } from '../shared/employee';

@Component({
  selector: 'employee',
  templateUrl: './employee-component.component.html',
  styleUrls: ['./employee-component.component.css'],
  providers: [MyServiceService]
})
export class EmployeeComponentComponent implements OnInit {
  booles = false;
  backendData: any;
  myF;
  public tit = {
    titles: ''
  };
  myedit: any;
  myar = [];
  constructor(public _sharedModuleService: MyServiceService) {
    this._sharedModuleService.getEmployeeList().subscribe((data) => {
      this.backendData = data;
    })
  }

  ngOnInit(): void {
  }
  async myfun() {
    await this.backendData;
  }

  del(i) {
    this.backendData.splice(i, 1);
    this._sharedModuleService.deleteEmployee(i).subscribe((data) => data);
  }
  post() {

    console.log(this.tit);
    this._sharedModuleService.postEmployee(this.tit).subscribe(result => console.log('i got result', result));
  }
  edit(i) {
    // here i is an index of the rows of data...
    this.tit.titles = this.backendData[i].titles;
    console.log(this.backendData);
  }
}
