import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CarwheelsfeatureComponent } from './carwheelsfeature.component';

const routes: Routes = [{ path : '', component : CarwheelsfeatureComponent
}]
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CarsRoutingModule { }
