import { Component, OnInit, Pipe } from '@angular/core';
import { BussinessService } from '../bussiness.service';

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.css']
})

export class WalletComponent implements OnInit {
  wallets;
  constructor(private bussinessService: BussinessService) { }

  ngOnInit() {
    this.bussinessService.getWalletbyUser()
      .subscribe(
      result => {
        this.wallets = result;
      });
  }
}
