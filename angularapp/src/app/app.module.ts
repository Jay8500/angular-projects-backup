import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ChildComponent } from './child/child.component';
import { Comp2Component } from './comp2/comp2.component';
import { Comp3Component } from './comp3/comp3.component';
import { Comp4Component } from './comp4/comp4.component';
import { LifecyclesComponent } from './lifecycles/lifecycles.component';
import { HooksComponent } from './hooks/hooks.component';
import { ProductComponent } from './product/product.component';
import { ProductListComponent } from './product-list/product-list.component';
// import { CalendarModule } from 'primeng/calendar';
import { CreditcomComponent } from 'src/creditcard/creditcom.component';
import { FindingComponent } from './finding/finding.component';
@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    Comp2Component,
    Comp3Component,
    Comp4Component,
    LifecyclesComponent,
    HooksComponent,
    ProductComponent,
    ProductListComponent,
    CreditcomComponent,
    FindingComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
