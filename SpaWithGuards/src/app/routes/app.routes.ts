import { Routes } from "@angular/router";
import { PageoneComponent } from '../components/pageone.component';
import { PagetwoComponent } from '../components/pagetwo.component';
import { PagethreeComponent } from '../components/pagethree.component';
import { ChildoneComponent } from '../components/childone.component';
import { ChildtwoComponent } from '../components/childtwo.component';
import { ChildthreeComponent } from '../components/childthree.component';
import { authGuard } from '../guards/auth.guard';
export const appRoutes:Routes = [
    {path:"page_one",component:PageoneComponent,
     children:[{path:"child_one",component:ChildoneComponent}],
     canActivate:[authGuard]},
    
    {path:"page_two",component:PagetwoComponent,
     children:[{path:"child_two",component:ChildtwoComponent}],
     canDeactivate:[authGuard]},
    
     {path:"page_three",component:PagethreeComponent,
     children:[{path:"child_three",component:ChildthreeComponent}],
     canActivateChild:[authGuard]}
];




