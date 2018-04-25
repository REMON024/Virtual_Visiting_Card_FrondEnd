import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminAuthenticationService } from '../admin-authentication.service';
@Component({
  selector: 'app-change-admin-password',
  templateUrl: './change-admin-password.component.html',
  styleUrls: ['./change-admin-password.component.css']
})
export class ChangeAdminPasswordComponent implements OnInit {

  constructor(private authenticationService: AdminAuthenticationService,
  private router: Router) { }

  ngOnInit() {
  }
  logForm(value: any) {
    if (value.cPassword === value.newPassword) {

      this.authenticationService.changePassword(value.oldPassword, value.newPassword, value.cPassword)
        .subscribe(
        result => {
          alert('Password Changed.');
          this.router.navigate(['/wallet']);
        },
        error => {
          alert('Password changed failed.');
        });

    } else {
      alert('New password and retype password does not matched.');
    }
  }
}
