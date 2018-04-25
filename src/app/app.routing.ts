import { RouterModule, Routes } from '@angular/router';
import { BUSSINESS_ROUTES } from './bussiness/bussiness.routing';
import { HomeComponent } from './bussiness/home/home.component';
import { BusinessComponent } from './bussiness/bussiness.component';
import { NotFoundComponent } from './notfound.component';

const APP_ROUTES: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    // { path: 'bussiness', component: BusinessComponent, children: BUSSINESS_ROUTES, canActivateChild: [AuthguardGuard] },
    { path: 'bussiness', component: BusinessComponent, children: BUSSINESS_ROUTES},
    { path: 'not-found', component: NotFoundComponent },
    { path: '**', redirectTo: 'not-found' }
];

export const routing = RouterModule.forRoot(APP_ROUTES);
