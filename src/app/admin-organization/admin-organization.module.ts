import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { adminOrganizationRouting } from './admin-organization.routing';

import { AdminAuthenticationService } from './admin-authentication.service';
import { AdminOrganizationService } from './admin-organization.service';

import { NewRequestComponent } from './new-request/new-request.component';
import { UsersComponent } from './users/users.component';
import { ChangeAdminPasswordComponent } from './change-admin-password/change-admin-password.component';
import { CardDesignComponent } from './card-design/card-design.component';
import { AdminLoginComponent } from './admin-login/login.component';
import { AdminRegistrationComponent } from './admin-registration/registration.component';



@NgModule({
  imports: [
    CommonModule,
    adminOrganizationRouting,
    FormsModule,
    HttpModule,
    ReactiveFormsModule
  ],
  declarations: [
    NewRequestComponent,
    UsersComponent,
    ChangeAdminPasswordComponent,
    CardDesignComponent,
    AdminLoginComponent,
    AdminRegistrationComponent
  ],
  exports: [
  ],
  providers: [
    AdminAuthenticationService,
    AdminOrganizationService
  ]
})
export class AdminOrganizationModule { }
