import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { LoginPageComponent } from './login-page/login-page.component';
import { HomeLandingpageComponent } from './home-landingpage/home-landingpage.component';
import { SignUpPageComponent } from './sign-up-page/sign-up-page.component';

const routes :  Routes = [
      { path : '', component : HomeLandingpageComponent},
      { path : 'signuppage', component : SignUpPageComponent},
      { path : 'loginpage', component : LoginPageComponent},

];

@NgModule({
      imports : [RouterModule.forChild(routes)],
      exports  : [RouterModule]
})

export class AdminRoutingModules {}