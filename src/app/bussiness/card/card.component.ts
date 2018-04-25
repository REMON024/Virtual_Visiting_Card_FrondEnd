import { Component, OnInit } from '@angular/core';
import { BussinessService } from '../bussiness.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  card: any = {};
  constructor(private bussinessService: BussinessService) { }

  ngOnInit() {
    this.bussinessService.getCardByUser()
      .subscribe(res => this.card = res);
  }
}
