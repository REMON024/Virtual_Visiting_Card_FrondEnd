import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BootstrapModalModule } from 'ng2-bootstrap-modal';
import { AppComponent } from './app.component';
import { routing } from './app.routing';
import { NotFoundComponent } from './notfound.component';

import { AuthenticationModule } from './authentication/authentication.module';
import { BussinessModule } from './bussiness/bussiness.module';
import { SharedModule } from './shared/shared.module';
import { AdminOrganizationModule } from './admin-organization/admin-organization.module';


import { LoginComponent } from './authentication/login/login.component';
import { AdminLoginComponent } from './admin-organization/admin-login/login.component';
import { RegistrationComponent } from './authentication/registration/registration.component';
import { AdminRegistrationComponent } from './admin-organization/admin-registration/registration.component';


@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    routing,
    AuthenticationModule,
    BussinessModule,
    SharedModule,
    AdminOrganizationModule,
    BootstrapModalModule
  ],
  entryComponents: [
    LoginComponent,
    RegistrationComponent,
    AdminLoginComponent,
    AdminRegistrationComponent
  ]
  ,
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
