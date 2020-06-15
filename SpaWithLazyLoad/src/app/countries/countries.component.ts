import { Component } from "@angular/core";
import { countriesService } from './countries.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
    selector:"countries",
    templateUrl:"./countries.component.html"
})

export class countriesComponent{
    public result:any;
    constructor(public service:countriesService){}
    ngOnInit(){
        this.service.getCountries().subscribe((posRes)=>{
            console.log(posRes);
            this.result=posRes;
        },(erroRes:HttpErrorResponse)=>{
            console.log(erroRes);
        });
    }
};