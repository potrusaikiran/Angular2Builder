import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pe-parent',
  templateUrl: './pe-parent.component.html',
})
export class PeParentComponent implements OnInit {
  messageFromChild: any;
  bindingValue:string;
  constructor() { }

  ngOnInit() {
    this.bindingValue="its binding value";
  }
  onSomeClick(event:any){
    this.messageFromChild =event;
  }
}
