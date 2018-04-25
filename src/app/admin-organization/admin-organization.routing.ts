
import { RouterModule } from '@angular/router';
import { NewRequestComponent } from './new-request/new-request.component';
import { UsersComponent } from './users/users.component';
import { CardDesignComponent } from './card-design/card-design.component';
import { ChangeAdminPasswordComponent } from './change-admin-password/change-admin-password.component';

export const adminOrganizationRouting = RouterModule.forChild([
    // { path: 'login', component: LoginComponent },
    // { path: 'registration', component: RegistrationComponent }
    { path: 'admin/newRequest', component: NewRequestComponent  },
    { path: 'admin/userList', component: UsersComponent  },
    { path: 'admin/changeAdminPassword', component:  ChangeAdminPasswordComponent },
    { path: 'admin/cardDesing', component: CardDesignComponent  }
]);
