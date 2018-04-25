import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

@Injectable()
export class AdminAuthenticationService {
  isAuthenticated = new Subject();

  constructor(private http: Http) { }

  login(email: string, passwd: string) {
    const body = 'username=' + email + '&password=' + passwd + '&grant_type=password';
    return this.http.post('Token', body)
      .map((response: Response) => {
        return response.json();
      }
      ).do(
      response => {
        localStorage.setItem('orgAdminToken', 'bearer ' + response.access_token);
        localStorage.setItem('orgAdminId', response.id);
        localStorage.setItem('orgAdminName', response.name);
      }
      );
  }

  changePassword(oldPassword: string, newPassword: string, confirmpassword: string) {
    const body = JSON.stringify({ oldPassword: oldPassword, newPassword: newPassword, confirmPassword: confirmpassword });
    const token = this.getOrgAdminToken();
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', token);
    const options = new RequestOptions({ headers: headers });

    return this.http.post('api/Account/ChangePassword', body, options);
  }

  registration(body) {
    const headers = new Headers({ 'Content-Type': 'application/json' });
    return this.http.post('api/Account/Register', body, { headers: headers });
  }

  getOrgAdminToken() {
    return localStorage.getItem('orgAdminToken');
  }

  getOrgAdminUserId() {
    return localStorage.getItem('orgAdminId');
  }

  getOrgAdminUserName() {
    return localStorage.getItem('orgAdminName');
  }
  logout(): void {
    localStorage.removeItem('orgAdminToken');
    localStorage.removeItem('orgAdminId');
    localStorage.removeItem('orgAdminName');
  }
}
