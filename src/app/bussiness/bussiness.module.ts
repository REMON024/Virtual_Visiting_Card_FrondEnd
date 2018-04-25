import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { WalletComponent } from './wallet/wallet.component';
import { CardComponent } from './card/card.component';
import { CardRequestComponent } from './card-request/card-request.component';
import { BUSSINESS_ROUTES } from './bussiness.routing';

import { NavbarComponent } from './navbar/navbar.component';
import { BussinessService } from './bussiness.service';
import { HomeComponent } from './home/home.component';
import { ApplycardComponent } from './applycard/applycard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BootstrapModalModule } from 'ng2-bootstrap-modal';
import { BusinessComponent } from './bussiness.component';
import { FindCardComponent } from './find-card/find-card.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BootstrapModalModule,
    RouterModule
  ],
  declarations: [
    WalletComponent,
    CardComponent,
    CardRequestComponent,
    HomeComponent,
    ApplycardComponent,
    FindCardComponent,
    BusinessComponent,
    NavbarComponent],
  exports: [
    WalletComponent,
    CardComponent,
    CardRequestComponent,
    HomeComponent
  ],
  providers: [BussinessService]
})
export class BussinessModule { }
