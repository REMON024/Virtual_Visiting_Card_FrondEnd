import { Component } from '@angular/core';
@Component({
    selector: 'not-found',
    template: `<section id="notfound-section">
                <div class="container">
                <div class="text-center">
                <i class="fa fa-exclamation-triangle" aria-hidden="true"></i><br>
                <h1 class="display-1">Not Found</h1>
                </div>
                </div>
                </section>`
})
export class NotFoundComponent { }