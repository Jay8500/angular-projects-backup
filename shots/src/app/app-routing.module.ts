import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppModule } from './app.module';
import { ErrorreachedComponent } from './errorreached/errorreached.component';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { PlayistsdetailComponent } from './playistsdetail/playistsdetail.component';
import { PlayistslistComponent } from './playistslist/playistslist.component';
import { PlugginpagesComponent } from './plugginpages/plugginpages.component';


const routes: Routes = [
  { path: '', component: LandingpageComponent },
  { path: 'landingpage', component:LandingpageComponent},
  { path: 'pluggins', component: PlugginpagesComponent },
  { path: 'playistslist', component:PlayistslistComponent},
  { path: 'playistsdetail/:id', component:PlayistsdetailComponent},
  { path: '**', component: ErrorreachedComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
