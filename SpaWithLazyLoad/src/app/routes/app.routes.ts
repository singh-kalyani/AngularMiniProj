import {Routes,RouterModule} from "@angular/router";
import { authGuard } from '../guards/auth.guard';
import { ModuleWithProviders } from '@angular/core';
import { PageoneComponent } from '../components/pageone.component';

export const appRoutes:Routes = [{path:"Pageone",component:PageoneComponent},
                                 {
                                    path:"LazyLoad",
                                    loadChildren:()=> import("../countries/countries.module").then(obj=>obj.countriesModule),
                                    canLoad:[authGuard]
                                }];
                                  
export const lazyRoutes:ModuleWithProviders = RouterModule.forRoot(appRoutes);