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
  users: User[] = [{ 'name': 'Saikrian', 'bio': 'Khammam', 'job': 'Developer', 'salary': 10 },
  { 'name': 'Narendra', 'bio': 'Nellore', 'job': 'Tester', 'salary': 20 },
  { 'name': 'Rajesh', 'bio': 'Guntur', 'job': 'developer', 'salary': 10 }];
  user: User;
  debugger;
  isclick:boolean
  constructor(private _sharedService: SharedService) {
  }
  ngOnInit() {
  }
  openpop() {
    alert('UnderConstruction...!!!');
  }
  SelectedUser(user: User) {
    this.isclick=true;
  }

}
