import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DialogComponent, DialogService } from 'ng2-bootstrap-modal';
import { AdminAuthenticationService } from '../admin-authentication.service';

export interface PromptModel {
  title: string;
}
@Component({
  selector: 'app-admin-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})

export class AdminRegistrationComponent extends DialogComponent<PromptModel, string> implements PromptModel {
  title: string;
  name: string;
  email: string;
  password: string;
  cpassword: string;
  constructor(dialogService: DialogService,
    private authenticationService: AdminAuthenticationService) {
    super(dialogService);
  }

  registration(value) {
    console.log(value);
    const body = {
      'Name': value.name,
      'Email': value.email,
      'Password': value.password,
      'ConfirmPassword': value.cpassword,
      'RoleId': '2000'
    };
    this.authenticationService.registration(body)
      .subscribe(
      Response => {
        confirm('Registration successful.');
      },
      error => {
        confirm('Registration filed.Try again.');
      }
      );
    this.close();
  }
}
