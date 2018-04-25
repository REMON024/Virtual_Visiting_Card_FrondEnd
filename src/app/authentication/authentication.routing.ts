
import { RouterModule } from '@angular/router';
import { ChangePasswordComponent } from './change-password/change-password.component';

export const AuthenticationRouting = RouterModule.forChild([
    // { path: 'login', component: LoginComponent },
    // { path: 'registration', component: RegistrationComponent }
    { path: 'changePassword', component: ChangePasswordComponent  }
]);
