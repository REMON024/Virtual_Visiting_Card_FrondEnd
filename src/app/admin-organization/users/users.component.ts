import { Component, OnInit } from '@angular/core';
import { AdminOrganizationService } from '../admin-organization.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  usercards;

  constructor(private adminOrganizationService: AdminOrganizationService) { }

  ngOnInit() {
    this.adminOrganizationService.getCardByOrganization()
      .subscribe(
      result => {
        this.usercards = result;
      });
  }

}
