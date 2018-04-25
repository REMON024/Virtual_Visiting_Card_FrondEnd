import { Component, OnInit, Input } from '@angular/core';
import { AuthenticationService } from './../../authentication/authentication.service';
import { BussinessService } from './../../bussiness/bussiness.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})

export class NavbarComponent implements OnInit {
  searchKeyword;
  userName: string = 'Account';
  isCard: boolean = true;
  constructor(private authService: AuthenticationService,
    private router: Router,
    private bussinessService: BussinessService) { }

  ngOnInit() {
    this.bussinessService.getCardByUser()
    .subscribe(
      (response) =>{ 
        if(response.isCard == false){
          this.isCard = response.isCard;
        }
        this.userName = localStorage.getItem('userName');
      }
    );
  }

  gotoFindCard() {
    this.router.navigate(['/bussiness','find-card', this.searchKeyword]);
  }
}
