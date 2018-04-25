import { Component, OnInit } from '@angular/core';
import { AdminOrganizationService } from '../admin-organization.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-card-design',
  templateUrl: './card-design.component.html',
  styleUrls: ['./card-design.component.css']
})
export class CardDesignComponent implements OnInit {
  organizationName;
  input1;
  input1ph;
  input2;
  input2ph;
  input3;
  input3ph;
  input4;
  input4ph;
  input5;
  input5ph;
  input6;
  input6ph;
  input7;
  input7ph;

  constructor(private adminOrganizationService: AdminOrganizationService,
    private router: Router) { }

  ngOnInit() {
  }
  DesignSubmit() {
    const design = {
      'Name': this.organizationName,
      'Field1': this.input1,
      'Field1placeholder': this.input1ph,
      'Field2': this.input2,
      'Field2placeholder': this.input2ph,
      'Field3': this.input3,
      'Field3placeholder': this.input3ph,
      'Field4': this.input4,
      'Field4placeholder': this.input4ph,
      'Field5': this.input5,
      'Field5placeholder': this.input5ph,
      'Field6': this.input6,
      'Field6placeholder': this.input6ph,
      'Field7': this.input7,
      'Field7placeholder': this.input7ph,
      'AdminId': localStorage.getItem('orgAdminId')
    };
    console.log(design);
    this.adminOrganizationService.addDesign(design)
      .subscribe(
      response => {
        alert('Design submitted sucessfully');
        this.router.navigate(['admin/newRequest']);

      },
      error => {
        alert('Design not submitted. Try again');
      }
      );
  }
}
