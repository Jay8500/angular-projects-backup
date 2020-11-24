import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputdirectiveComponent } from './inputdirective.component';
import { WillshareModule } from 'src/app/shared/willshare/willshare.module';
import {FormsModule} from '@angular/forms';
@NgModule({
  declarations: [InputdirectiveComponent],
  imports: [
    CommonModule,
    WillshareModule,
    FormsModule
  ]
})
export class InputdirectiveModule { }
