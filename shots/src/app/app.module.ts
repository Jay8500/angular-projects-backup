import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WillshareModule } from './shared/willshare/willshare.module';
import { ReactiveFormsModule } from '@angular/forms';
import {Global } from './global';
// PrimeNg
// import {InputTextModule} from 'primeng/inputtext';
// import { InputdirectiveComponent } from './directives/inputdirective/inputdirective.component';
// import { InputdirectiveModule } from './directives/inputdirective/inputdirective.module';
import { FormsModule } from '@angular/forms';
import { PlugginpagesComponent } from './plugginpages/plugginpages.component';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { ErrorreachedComponent } from './errorreached/errorreached.component';
import { PlayistslistComponent } from './playistslist/playistslist.component';
import { PlayistsdetailComponent } from './playistsdetail/playistsdetail.component';
// import { ToasterserviceComponent } from './directives/toasterservice/toasterservice.component';
import { ToastModule } from 'primeng/toast';

@NgModule({
  declarations: [
    AppComponent,

    // InputdirectiveComponent,
    PlugginpagesComponent,
    LandingpageComponent,
    ErrorreachedComponent,
    PlayistslistComponent,
    PlayistsdetailComponent,
    // ToasterserviceComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    // InputTextModule,
    WillshareModule,
    HttpClientModule,
    ReactiveFormsModule,
    ToastModule,
    
  ],
  providers: [Global],
  bootstrap: [AppComponent]
})
export class AppModule { }
