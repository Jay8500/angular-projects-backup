import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule} from '@angular/forms';
import {FirstfeatureModule} from './firstfeature/firstfeature.module';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import {CalendarModule} from 'primeng/calendar';
import { HttpClientModule} from '@angular/common/http';
import { DemoService} from './demo.service';
import {CustomersModule} from './customers/customers.module';
import { HelpViewchildComponent } from './help-viewchild/help-viewchild.component';
// import {OrdersModule} from './orders/orders.module';
@NgModule({
  declarations: [
    AppComponent,
    PagenotfoundComponent,
    HelpViewchildComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CalendarModule,
    AppRoutingModule,
    FirstfeatureModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CustomersModule,
    // OrdersModule
  ],
  providers: [DemoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
