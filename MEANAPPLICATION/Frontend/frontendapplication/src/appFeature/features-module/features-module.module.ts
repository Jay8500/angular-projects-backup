import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeLandingpageComponent } from './home-landingpage/home-landingpage.component';
import { SignUpPageComponent } from './sign-up-page/sign-up-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { FeatureDirectiveDirective } from './feature-directive.directive';
import { DashBoardsListComponent } from './dash-boards-list/dash-boards-list.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { ChatListsComponent } from './chat-lists/chat-lists.component';
@NgModule({
  declarations: [HomeLandingpageComponent, SignUpPageComponent, LoginPageComponent, FeatureDirectiveDirective, DashBoardsListComponent, ContactPageComponent, ChatListsComponent,],
  imports: [
    CommonModule
  ],
  providers: [],
  exports: [HomeLandingpageComponent, SignUpPageComponent, LoginPageComponent, ContactPageComponent,
             DashBoardsListComponent, ChatListsComponent]
})
export class FeaturesModuleModule { }
