import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'pagetwo',
  templateUrl: './pagetwo.component.html',
  styles: []
})
export class PagetwoComponent implements OnInit {
  public var_two:any;
  constructor(public route:ActivatedRoute) { 
    this.var_two = this.route.snapshot.params["p_id"]+"....."+
                   this.route.snapshot.params["p_name"]+"...."+
                   this.route.snapshot.params["p_cost"];
  }

  ngOnInit() {
  }

}
