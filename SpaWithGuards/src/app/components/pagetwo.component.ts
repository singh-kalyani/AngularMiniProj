import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pagetwo',
  templateUrl: './pagetwo.component.html',
  styles: []
})
export class PagetwoComponent implements OnInit {
  public var_two:any;
  constructor() { 
    this.var_two = "Page Two !!!";
  }

  ngOnInit() {
  }

}
