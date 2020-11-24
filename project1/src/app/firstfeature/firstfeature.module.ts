import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarwheelsfeatureComponent } from './carwheelsfeature/carwheelsfeature.component';
import {CarsRoutingModule } from './carwheelsfeature/carwheelsfeature-routing.module';


@NgModule({
  declarations: [CarwheelsfeatureComponent],
  imports: [
    CommonModule,
    CarsRoutingModule
  ],
  exports :[
    CarwheelsfeatureComponent
  ]
})
export class FirstfeatureModule { }
