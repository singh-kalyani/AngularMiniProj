import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './childone.component.html'
})
export class ChildoneComponent implements OnInit {
  public var_four:any;
  constructor() { 
    this.var_four = "child one !!!";
  }
  ngOnInit() {
  }
}
