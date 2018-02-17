import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs';

@Injectable()
export class LeadsheetService {
data='http://192.168.0.145/audit.api.dev/api/leadsheet/getallleadsheetsk?{%22take%22:20,%22skip%22:0,%22page%22:1,%22pageSize%22:20}&companyId=1165&LeadsheetType=Liabilities';
  constructor(private _http:Http) { }
  getallleadsheetsk() {
      return this._http.get(this.data)
          .map(response => {
              { return response.json(); }
          })
          .catch(error => Observable.throw(error.json()));
  }
  user='sai';
}
