import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreditcomComponent } from './creditcom.component';



@NgModule({
  declarations: [CreditcomComponent],
  imports: [
    CommonModule
  ],
  exports : [CreditcomComponent]
})
export class CreditcardModule { }
