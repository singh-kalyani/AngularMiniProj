import { Routes } from "@angular/router";
import { PageoneComponent } from '../components/pageone.component';
import { PagetwoComponent } from '../components/pagetwo.component';
import { PagethreeComponent } from '../components/pagethree.component';
import { ChildoneComponent } from '../components/childone.component';
import { ChildtwoComponent } from '../components/childtwo.component';
import { ChildthreeComponent } from '../components/childthree.component';
export const appRoutes:Routes = [
    {path:"page_one/:p_id/:p_name/:p_cost",component:PageoneComponent,
     children:[{path:"child_one",component:ChildoneComponent}]},
    
    {path:"page_two/:p_id/:p_name/:p_cost",component:PagetwoComponent,
     children:[{path:"child_two",component:ChildtwoComponent}]},
    
     {path:"page_three/:p_id/:p_name/:p_cost",component:PagethreeComponent,
     children:[{path:"child_three",component:ChildthreeComponent}]}
];




