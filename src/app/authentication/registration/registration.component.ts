import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DialogComponent, DialogService } from 'ng2-bootstrap-modal';
import { AuthenticationService } from '../../authentication/authentication.service';


export interface PromptModel {
  title: string;
}
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})

export class RegistrationComponent extends DialogComponent<PromptModel, string> implements PromptModel {
  title: string;
  name: string;
  email: string;
  password: string;
  cpassword: string;
  constructor(dialogService: DialogService,
    private authenticationService: AuthenticationService) {
    super(dialogService);
  }

  registration(value) {
    console.log(value);
    const body = {
      'Name': value.name,
      'Email': value.email,
      'Password': value.password,
      'ConfirmPassword': value.cpassword,
      'RoleId': '1000'
    };
    this.authenticationService.registration(body)
      .subscribe(
      response => console.log(response),
      error => console.log(error)
      );
    this.close();
  }
}
