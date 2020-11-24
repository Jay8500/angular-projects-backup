import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { LoginsComponent } from './logins/logins.component';
import { CouldnotfoundComponent } from './couldnotfound/couldnotfound.component';
import { TodoComponent } from './todo/todo.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'signup', component: SignupComponent },
  {
    path: 'login', component: LoginsComponent
  },
  { path: 'yourtodos', component: TodoComponent },

  { path: '**', component: CouldnotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
