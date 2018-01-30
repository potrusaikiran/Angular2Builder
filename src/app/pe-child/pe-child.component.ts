import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-pe-child',
  templateUrl: './pe-child.component.html',
})
export class PeChildComponent implements OnInit {
  name: string;
  @Input("otherValue") bindingValue: string;
  @Output() clickrise: EventEmitter<any> = new EventEmitter<any>();
  constructor() { }

  ngOnInit() {
    this.name = "Bob"
  }
  onclick() {
    this.clickrise.emit("child clicked");
  }
}
