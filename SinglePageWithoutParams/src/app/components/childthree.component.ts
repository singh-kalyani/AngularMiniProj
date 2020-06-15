import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'childthree',
  templateUrl: './childthree.component.html',
  styles: [
  ]
})
export class ChildthreeComponent implements OnInit {
public var_six:any;
  constructor() {
    this.var_six="Child Three";
   }

  ngOnInit(): void {
  }

}
