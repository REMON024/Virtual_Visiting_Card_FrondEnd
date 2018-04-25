import { Component, OnInit } from '@angular/core';
import { ErrorService } from './error.service';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {
  error;
  display = 'none';
  constructor(private errorService: ErrorService) { }


  onErrorHandled() {
    this.display = 'none';
  }

  ngOnInit() {
    this.errorService.errorOccurred
      .subscribe(
      (error) => {
        this.error = error;
        this.display = 'block';
      }
      );
  }

}
