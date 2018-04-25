import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { DialogComponent, DialogService } from 'ng2-bootstrap-modal';
import { AdminAuthenticationService } from '../admin-authentication.service';

export interface PromptModel {
  title: string;
}
@Component({
  selector: 'app-admin-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class AdminLoginComponent extends DialogComponent<PromptModel, string> implements PromptModel {
  title: string;

  constructor(dialogService: DialogService,
    private authenticationService: AdminAuthenticationService,
    private router: Router) {
    super(dialogService);
  }

  login(value) {

    this.authenticationService.login(value.email, value.password)
    .subscribe(
    response => {
      alert('signin successfull.');
      this.router.navigate(['/admin/newRequest']);
    },
    error => {
      alert('login failed.');
      // this.router.navigate(['/home']);
    }
    );
    this.close();
  }
}
