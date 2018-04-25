import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AuthenticationRouting } from './authentication.routing';

import { AuthenticationService } from './authentication.service';


import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { ChangePasswordComponent } from './change-password/change-password.component';



@NgModule({
  imports: [
    CommonModule,
    AuthenticationRouting,
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ],
  declarations: [
    RegistrationComponent,
    LoginComponent,
    ChangePasswordComponent
  ],
  exports: [
  ],
  providers: [
    AuthenticationService
  ],
})
export class AuthenticationModule { }
