import { Component, OnInit } from '@angular/core';
import { DialogComponent, DialogService } from 'ng2-bootstrap-modal';
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';


export interface PromptModel {
  title: string;
}
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent extends DialogComponent<PromptModel, string> implements PromptModel, OnInit {
  title: string;
  email: string;
  password: string;
  constructor(dialogService: DialogService,
    private authenticationService: AuthenticationService,
    private router: Router) {
    super(dialogService);
  }

  ngOnInit() {
    this.authenticationService.logout();
  }

  login(value) {
    this.authenticationService.login(value.email, value.password)
      .subscribe(
      response => {
        localStorage.setItem('token', 'bearer ' + response.access_token);
        localStorage.setItem('userId', response.id);
        localStorage.setItem('userName', response.name);
        this.router.navigate(['/bussiness/wallet']);
      });
    this.close();
  }
 
  // ngOnInit() {
  //   this.authenticationService.logout();
  //   this.authenticationService.isAuthenticated.next(false);
  // }
}
