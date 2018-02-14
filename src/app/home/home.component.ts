import { Component, OnInit, Renderer, ElementRef, ViewChild } from '@angular/core';
import { User } from '../User';
import { SharedService } from './../shared.service';
import { Guid } from '../guid';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  // tslint:disable-next-line:max-line-length
  styles: ['table {font-family: arial, sans-serif;border-collapse: collapse;width: 100%} td, th {border: 1px solid #dddddd;text-align: left;padding: 8px;}']
})

export class HomeComponent implements OnInit {
  users: User[] = [{ Id: Guid.newGuid(), 'name': 'Saikrian', 'bio': 'Khammam', 'job': 'Developer', 'salary': 10 },
  { Id: Guid.newGuid(), 'name': 'Narendra', 'bio': 'Nellore', 'job': 'Tester', 'salary': 20 },
  { Id: Guid.newGuid(), 'name': 'Rajesh', 'bio': 'Guntur', 'job': 'developer', 'salary': 10 }];
  user: User;
  debugger;
  isclick: boolean = false;
  isgrid: boolean = true
  constructor(private _sharedService: SharedService) {
  }
  ngOnInit() {
  }
  openpop() {
    this.isclick = true;
    this.user = new User(null, null, null, 0);
    this.isgrid = false;
    // alert('UnderConstruction...!!!');
  }
  SelectedUser(user: User) {
    this.isclick = true;
    this.isgrid = false
    this.user = user;
    this.user= Object.assign({}, user);
  }
  addtolist(user: User) {
    if (user.name == null || user.bio == null || user.job == null || user.salary == null)
      alert("Please fill the fields to continue...!!!");
    else {
      var index = this.users.findIndex(c => c.Id == user.Id);
      if (index < 0) {
        user.Id = Guid.newGuid();
        this.users.push(user);
        this.isgrid = true;
        this.user = null;
      }
      this.users[index] = user;
      this.isgrid = true;
      this.user = null;
    }
  }
  cancel(user: User) {
    this.isgrid = true;
    this.user = null;
    console.log(this.users)
  }
  delete(user: any) {
    if (user == null)
      alert("please select checkbox")
    else {
      for (let i = 0; i < this.users.length; i++) {
        if (this.users[i].Id == user.Id) {
          this.users.splice(i, 1);
          this.isgrid = true;
        }
      }
    }
  }

}
