import { Component, OnInit } from '@angular/core';
import { UseMeService } from '../use-me.service';
import { MessageService } from 'primeng/api';
import * as _ from 'node_modules/lodash';
// import { WillshareModule } from '../shared/willshare/willshare.module'

import { ReactiveFormsModule, FormBuilder, FormGroup, FormControl } from '@angular/forms';
@Component({
  selector: 'app-landingpage',
  templateUrl: './landingpage.component.html',
  styleUrls: ['./landingpage.component.css'],
  providers: [MessageService]
})
export class LandingpageComponent implements OnInit {
  masterForm = this.fb.group({
    name: [''],
    middlename: [''],
    surname: [''],
    loginname: [''],
    nationality: [''],
    state: [''],
    password: [''],
    conformpassword: [''],
    gender: [''],
    homecontact: [''],
    personalcontact: [''],
    states: [''],
    district: [''],
    landmark: [''],
    pincode: [''],
    createDate: [''],
    sessionBy: [''],
  });
  public gL = {};
  public selec = "";
  public storeit = [];
  public byDwayClone = {};
  get masterCtrl() {
    return this.masterForm.controls
  }
  public cheek: any;
  public genderArray = [{ value: '', label: 'select genders' }]
  constructor(private use: UseMeService, public fb: FormBuilder,
    private _mS: MessageService
  ) {
    this.use.getbyall().subscribe(res => this.cheek = res);
    this.use.getGender().subscribe(res => this.gL = res);
  }

  async ngOnInit() {
    if (Object.keys(this.use.jsonfilesget()).length == 0) {
      await this.use.jsonfilesget();
    }

  }
  public dude = "";
  async post() {
    this.byDwayClone = this.masterForm.getRawValue();
    var save = this.byDwayClone;
    await this.use.setmasterApi('users', 'createUser');
    var data = await this.use.insertionForPost(save);
    console.log(data);
    this._mS.add({
      severity: 'success', summary: 'Posted Successfully',
      detail: `yourS`,
    })
  }
  public get = [];
  async getbyall() {
    this.storeit = [];
    _.forEach(this.cheek, (val, ind) => {
      this.storeit.push(val);
    })
    //  var filter = _.filter(this.cheek, { gender : "female"});
    console.log(this.storeit);
    await this.use.getGender().subscribe(res => this.gL = res);
    console.log(this.gL);
    _.forEach(this.gL, (val, index) => {
      this.genderArray.push({ value: val.genderId, label: val.genderOptions });
    })

  }
}
