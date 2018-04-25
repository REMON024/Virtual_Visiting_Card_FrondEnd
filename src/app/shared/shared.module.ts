import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';


import { ErrorComponent } from './error/error.component';
import { ErrorService } from './error/error.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    ErrorComponent
  ],
  exports: [
    ErrorComponent
  ],
  providers: [ErrorService]
})
export class SharedModule { }
