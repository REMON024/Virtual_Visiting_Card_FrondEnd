import { Component } from '@angular/core';
import { DialogService } from 'ng2-bootstrap-modal';
import { LoginComponent } from './authentication/login/login.component';

@Component({
  selector: 'app-root',
  template: ` 
  <router-outlet></router-outlet>
  <app-error> </app-error>
            `
})
export class AppComponent { 
 
}
