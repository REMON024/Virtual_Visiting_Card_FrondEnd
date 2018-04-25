import { Component, OnInit, Pipe } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { BussinessService } from '../bussiness.service';
import { AuthenticationService } from '../../authentication/authentication.service';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-find-card',
  templateUrl: './find-card.component.html',
  styleUrls: ['./find-card.component.css']
})
export class FindCardComponent implements OnInit {
  cards;
  clicked = false;
  constructor(private route: ActivatedRoute,
    private bussinessService: BussinessService,
    private authenticationService: AuthenticationService) { }

  ngOnInit() {
    this.route.params.subscribe(params => this.bussinessService.SearchCardByName(params.name)
      .subscribe(card => this.cards = card));
  }
  onRequestSend(card) {
    const body = {
      'FromUserId': this.authenticationService.getUserId(),
      'ToUserId': card.UserId
    };
    this.bussinessService.sendRequest(body)
      .subscribe(
      response => {
        alert('Request Send Sucessfully.');
        this.clicked = true;
      },
      error => {
        alert('Request Failled.');
      }
      );
  }
}
