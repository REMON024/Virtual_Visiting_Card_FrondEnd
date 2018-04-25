import { BussinessService } from './../bussiness.service';
import { AuthenticationService } from '../../authentication/authentication.service';
import { Component, OnInit, Pipe } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-applycard',
  templateUrl: './applycard.component.html',
  styleUrls: ['./applycard.component.css']
})
export class ApplycardComponent implements OnInit {
  organizations = [];
  selectedOrg;
  OrganizationId;
  Field1;
  Field2;
  Field3;
  Field4;
  Field5;
  Field6;
  Field7;
  constructor(private bussinessService: BussinessService,
    private router: Router,
    private authenticationService: AuthenticationService) { }

  ngOnInit() {
    this.bussinessService.getOrganization()
      .subscribe(res => this.organizations = res);
  }

  onCardSubmit() {
    const body = {
      'UserId': this.authenticationService.getUserId(),
      'Field1': this.Field1,
      'Field2': this.Field2,
      'Field3': this.Field3,
      'Field4': this.Field4,
      'Field5': this.Field5,
      'Field6': this.Field6,
      'Field7': this.Field7,
      'OrganizationId': this.selectedOrg.OrganizationId
    };

    this.bussinessService.addCardDetail(body)
      .subscribe(
      response => {
        alert('Card Detail submitted sucessfully');
        this.router.navigate(['card']);

      },
      error => {
        alert('Card Detail not submitted. Try again');
      }
      );
  }
}
