import {NgModule} from "@angular/core";
import {countriesComponent} from "./countries.component";
import {CommonModule} from "@angular/common";
import {HttpClientModule} from "@angular/common/http";
import {countriesService} from "./countries.service";
import {RouterModule} from "@angular/router";

@NgModule({
    declarations:[countriesComponent],
    imports:[CommonModule,HttpClientModule,RouterModule.forChild([{path:"",component:countriesComponent}])],
    providers:[countriesService],
    exports:[countriesComponent]
})

export class countriesModule{}
