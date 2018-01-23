import { Component, OnInit } from '@angular/core';
import { HttpModule, Response, Http } from '@angular/http';
import { Guid } from '../guid';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
    styles: [`h1 { font-weight:normal;color:orange}`]
})
export class ProductComponent implements OnInit {
  product: any = { Id: null, Code: null, Name: null, PriceDetailModel: [] }
  PriceDetail: any = { Id: null, ProductId: null, GmPerMt: null, Price: null, Year: null, RecordStatus: null }
  PriceDetails: any = [];
  constructor(private _http: Http) { }
  ngOnInit() {
  }
  SaveProduct() {
    console.log(this.product);
    if (this.product.PriceDetailModel.length == 0)
      alert("Please Enter Atlleast one PriceDetail...!!!");
    else {
      let copy = Object.assign({}, this.product);
      copy.Id = Guid.newGuid();
      console.log(this.product.PriceDetailModel)
      copy.PriceDetailModel.forEach(element => {
        element.Id = Guid.newGuid();
        element.ProductId = copy.Id;
      });
      console.log(copy.PriceDetailModel);
      this._http.post('http://192.168.0.145/TradeAppDev/api/tradeapp/saveproduct', copy)
        .map((response: Response) => response.json())
        .subscribe();
      this.product.Name = '';
      this.product.Code = '';
      this.product.PriceDetailModel = [];
    }
  }
  Addpop() {
    let copy = Object.assign({}, this.product.PriceDetailModel);
    copy.Id = Guid.newGuid();
    this.product.PriceDetailModel.push(copy);
  }
  Editpop() {

  }
  Deletepop(Id) {
    var length = this.product.PriceDetailModel.length;
    for (var i = 0; i < length; i++) {
      if (this.product.PriceDetailModel[i].Id == Id) {
        this.product.PriceDetailModel.splice(i, 1);
      }
    }
  }
  DeletepopByObj() {

  }
  CancelProduct() {
    this.product.Name = '';
    this.product.Code = '';
    this.product.PriceDetailModel = [];
  }
}
