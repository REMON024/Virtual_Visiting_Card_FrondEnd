import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {

  constructor(private authenticationService: AuthenticationService,
  private router: Router) { }

  ngOnInit() {
  }

  logForm(value: any) {
    if (value.cPassword === value.newPassword) {

      this.authenticationService.changePassword(value.oldPassword, value.newPassword, value.cPassword)
        .subscribe(
        result => {
          alert('Password Changed.');
          this.router.navigate(['/admin/newRequest']);
        },
        error => {
          alert('Password changed failed.');
        });

    } else {
      alert('New password and retype password does not matched.');
    }
  }
}
