import { Component, OnInit } from '@angular/core';
import { LeadsheetService } from "../leadsheet.service";

@Component({
  selector: 'app-leadsheet',
  templateUrl: './leadsheet.component.html',
})
export class LeadsheetComponent implements OnInit {
  my_result: any;
  constructor(public _leadsheetservice: LeadsheetService) { }
userName:string;
  ngOnInit() {
    this.userName=this._leadsheetservice.user;
  }
  GridCall() {
    this._leadsheetservice.getallleadsheetsk()
      .subscribe(
        lstresult => {
          this.my_result = lstresult;
          console.log(this.my_result);
        },
        error => {
          console.log('Error. The callCurrencyService result JSON value is as follows:');
          console.log(error.error);
          alert(error.error + " currency");
        }
      );
  }
}
