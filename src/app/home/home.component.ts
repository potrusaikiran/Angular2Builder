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
  isclick: boolean=false;
  isgrid: boolean=true
  constructor(private _sharedService: SharedService) {
  }
  ngOnInit() {
  }
  openpop() {
    this.isclick = true;
    this.user = new User(null, null, null, 0);
    this.isgrid=false;
    // alert('UnderConstruction...!!!');
  }
  SelectedUser(user: User) {
    this.isclick = true;
    this.isgrid=false
    this.user = user;
  }
  addtolist(user: User) {
    if(user.name==null||user.bio==null||user.job==null||user.salary==null)
    alert("Please fill the fields to continue...!!!");
    else{
      this.users.forEach(use => {
        if(use.name!=user.name)
        this.users.push(user);
        this.isgrid=true;
      });
    }
  }
  cancel(user:User){
    this.isgrid=true;
    this.user=null;
  }

}
