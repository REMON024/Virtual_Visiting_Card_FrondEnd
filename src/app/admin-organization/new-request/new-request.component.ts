import { Component, OnInit, Pipe } from '@angular/core';
import { AdminOrganizationService } from '../admin-organization.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-request',
  templateUrl: './new-request.component.html',
  styleUrls: ['./new-request.component.css']
})
export class NewRequestComponent implements OnInit {

  newcards;

  constructor(private adminOrganizationService: AdminOrganizationService,
    private router: Router) { }

  ngOnInit() {
    this.adminOrganizationService.getCardRequest()
      .subscribe(
      result => {
        this.newcards = result;
      });
  }

  onAccept(card) {

    const updateRequestbody = {
      'UserId': card.UserId,
      'Field1': card.Field1,
      'Field2': card.Field2,
      'Field3': card.Field3,
      'Field4': card.Field4,
      'Field5': card.Field5,
      'Field6': card.Field6,
      'Field7': card.Field7,
      'RequestAccept': 'true',
      'OrganizationId': card.OrganizationId
    };
    this.adminOrganizationService.updateRequest(updateRequestbody, card.UserId)
      .subscribe(
      result => {
        this.router.navigate(['/admin/userList']);
      }
      );
  }

  onDecline(card) {
    if (confirm('Are you sure you want to decline ?')) {
      const index = this.newcards.indexOf(card);
      this.newcards.splice(index, 1);
      this.adminOrganizationService.declineRequest(card.UserId)
        .subscribe();
    }
  }
}
