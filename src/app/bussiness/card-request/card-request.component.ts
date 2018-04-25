import { Component, OnInit, Pipe } from '@angular/core';
import { Router } from '@angular/router';
import { BussinessService } from '../bussiness.service';

@Component({
  selector: 'app-card-request',
  templateUrl: './card-request.component.html',
  styleUrls: ['./card-request.component.css']
})
export class CardRequestComponent implements OnInit {
  requests;
  constructor(private bussinessService: BussinessService,
    private router: Router) { }

  ngOnInit() {
    this.bussinessService.getRequest()
      .subscribe(res => this.requests = res);
  }

  onAccept(request) {
    const updateRequestbody = {
      'Id': request.Id,
      'FromUserId': request.FromUserId,
      'ToUserId': request.ToUserId,
      'RequestAccept': 'true',
    };
    this.bussinessService.updateRequest(updateRequestbody, request.Id)
      .subscribe();
    const requestedWalletbody = {
      'OwnerId': request.FromUserId,
      'CardId': request.ToUserId
    };
    this.bussinessService.addWallet(requestedWalletbody)
      .subscribe(
      result => {
        this.router.navigate(['/wallet']);
      });

    const acceptedWalletbody = {
      'OwnerId': request.ToUserId,
      'CardId': request.FromUserId
    };
    this.bussinessService.addWallet(acceptedWalletbody)
      .subscribe(
      result => {
        this.router.navigate(['/wallet']);
      });
  }

  onDecline(request) {
    if (confirm('Are you sure you want to decline ?')) {
      const index = this.requests.indexOf(request);
      this.requests.splice(index, 1);
      this.bussinessService.declineRequest(request.Id)
        .subscribe();
    }
  }
}
