import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomecomponentComponent } from './homecomponent/homecomponent.component';
import { LogincomponentComponent } from './logincomponent/logincomponent.component';
import { PgnotfoundcomponentComponent } from './pgnotfoundcomponent/pgnotfoundcomponent.component';


const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LogincomponentComponent },
  {
    path: 'home', component: HomecomponentComponent
  },
  { path: '**', component: PgnotfoundcomponentComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  constructor() {
    console.log('app loaded first');
  }
}
