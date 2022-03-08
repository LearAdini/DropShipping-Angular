import { Injectable } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Injectable()
export class BusyService{
  constructor(private spinner: NgxSpinnerService) {}


  showSpinner(){
    this.spinner.show();

    setTimeout(() => {
      this.spinner.hide();
    }, 1000);
  }
}
