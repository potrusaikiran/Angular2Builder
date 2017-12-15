import { Component, OnInit, Renderer, ElementRef, ViewChild } from '@angular/core';
import { User } from '../User';
import { SharedService } from './../shared.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  // tslint:disable-next-line:max-line-length
  styles: ['table {font-family: arial, sans-serif;border-collapse: collapse;width: 100%} td, th {border: 1px solid #dddddd;text-align: left;padding: 8px;}']
})
export class HomeComponent implements OnInit {
  user: User[] = [{ 'name': 'Saikrian', 'bio': 'Khammam', 'job': 'Developer', 'salary': 10 },
  { 'name': 'Nareendra', 'bio': 'Nellore', 'job': 'Tester', 'salary': 20 },
  { 'name': 'Rajesh', 'bio': 'Guntur', 'job': 'developer', 'salary': 10 }];
  debugger;
  constructor(private _sharedService: SharedService) {
  }
  ngOnInit() {
  }
  AllEmployeeGreater() {
    this._sharedService.AllEmployeeGreater();
  }
  openpop() {
    alert('UnderConstruction  ');
  }

}
