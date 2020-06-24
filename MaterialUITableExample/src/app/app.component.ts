import { Component, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatTableModule } from '@angular/material/table'
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild(MatPaginator,{static:true})
  public paginator:MatPaginator;

  @ViewChild(MatSort,{static:true})
  public sort:MatSort;

  public displayedColumns:any=["p_id","p_name","p_cost"];
  public products:any=[{"p_id":111,"p_name":"p_one","p_cost":10000},
                       {"p_id":222,"p_name":"p_two","p_cost":20000},
                       {"p_id":333,"p_name":"p_three","p_cost":30000},
                       {"p_id":444,"p_name":"p_four","p_cost":40000},
                       {"p_id":555,"p_name":"p_five","p_cost":50000}];

  public dataSource:MatTableDataSource<any>;
  constructor(){

    this.dataSource=new MatTableDataSource(this.products)

  };    
  ngOnInit() {
    setTimeout(() => this.dataSource.paginator = this.paginator);
    this.dataSource.sort=this.sort;
    
  }               
}
