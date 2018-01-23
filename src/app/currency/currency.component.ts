import { Component, OnInit } from '@angular/core';
import { SharedService } from './../shared.service';

@Component({
    selector: 'app-currency',
    templateUrl: './currency.component.html',
    styles: ['h1 { font-weight:normal;color:orange} .clr { color:orange;} ']
})

export class CurrencyComponent implements OnInit {
    id_currency = '';
    my_result: any;

    constructor(private _sharedService: SharedService) {
    }

    ngOnInit() {
    }

    callCurrencyService() {
        this._sharedService.getCurrencyExchRate(this.id_currency.toUpperCase())
            .subscribe(
            lstresult => {
                // this.my_result = JSON.stringify(lstresult);
                this.my_result = lstresult;
                console.log(lstresult);
            },
            error => {
                console.log('Error. The callCurrencyService result JSON value is as follows:');
                console.log(error.error);
                alert(error.error+" currency");
            }
            );
    }
}
