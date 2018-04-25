import { EventEmitter } from '@angular/core';

export class ErrorService{
    errorOccurred = new EventEmitter<any>();

    handleError(error: any){
        //const errorData = new Error(error.title, error.error.message);
        this.errorOccurred.emit(error);
    }
}