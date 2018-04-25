import { ChangePasswordComponent } from './../authentication/change-password/change-password.component';
import { BusinessComponent } from './bussiness.component';
import { Routes } from '@angular/router';

import { WalletComponent } from './wallet/wallet.component';
import { HomeComponent } from './home/home.component';
import { CardRequestComponent } from './card-request/card-request.component';
import { CardComponent } from './card/card.component';
import { ApplycardComponent } from './applycard/applycard.component';
import { FindCardComponent } from './find-card/find-card.component';

export const BUSSINESS_ROUTES: Routes = [
    { path: '', redirectTo: 'wallet', pathMatch: 'full' },
    { path: 'wallet', component: WalletComponent },
    { path: 'changePassword', component: ChangePasswordComponent },
    { path: 'card-request', component: CardRequestComponent },
    { path: 'card', component: CardComponent },
    { path: 'apply-card', component: ApplycardComponent },
    { path: 'find-card/:name', component: FindCardComponent }
];
