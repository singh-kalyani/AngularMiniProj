import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'childtwo',
  templateUrl: './childtwo.component.html',
  styles: []
})
export class ChildtwoComponent implements OnInit {
  public var_five:any;
  constructor() { 
    this.var_five = "Child Two !!!";
  }

  ngOnInit() {
  }

}
