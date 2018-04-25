import { ErrorService } from './../shared/error/error.service';
import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

@Injectable()
export class AuthenticationService {

  constructor(private http: Http, private errorService: ErrorService) { }

  login(email: string, passwd: string) {
    const body = 'username=' + email + '&password=' + passwd + '&grant_type=password';
    return this.http.post('Token', body)
      .map((response: Response) => {
        this.errorService.handleError({ 'error': 'login success', 'error_description': 'User login successfully' });
        return response.json();
      })
      .catch((error: Response) => {
        this.errorService.handleError(error.json());
        return Observable.throw(error.json());
      });
  }

  changePassword(oldPassword: string, newPassword: string, confirmpassword: string) {
    const body = JSON.stringify({ oldPassword: oldPassword, newPassword: newPassword, confirmPassword: confirmpassword });
    const token = this.getToken();
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', token);
    const options = new RequestOptions({ headers: headers });

    return this.http.post('api/Account/ChangePassword', body, options);
  }

  registration(body) {
    const headers = new Headers({ 'Content-Type': 'application/json' });
    return this.http.post('api/Account/Register', body, { headers: headers })
      .map((response: Response) => {
        this.errorService.handleError({ 'error': 'Registration success', 'error_description': 'You can login now.' });
        return response.json();
      })
      .catch((error: Response) => {
        this.errorService.handleError(error.json());
        return Observable.throw(error.json());
      });
  }

  getToken() {
    return localStorage.getItem('token');
  }

  getUserId() {
    return localStorage.getItem('userId');
  }

  getUserName() {
    return localStorage.getItem('userName');
  }

  logout(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
    localStorage.removeItem('userName');
  }
}
