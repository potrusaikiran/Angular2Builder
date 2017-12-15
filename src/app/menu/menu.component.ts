import { Component, OnInit } from '@angular/core';
 import { User } from '../User';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styles: ['ul li {display: inline-flex;}']

})
export class MenuComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
