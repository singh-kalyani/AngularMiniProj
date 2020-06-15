import { Injectable } from "@angular/core";

@Injectable({
    providedIn:"root"
})
export class authGuard{

    canActivate():boolean{
        return confirm("Are you sure you want to enter Page One");
    };
    canDeactivate():boolean{
        return confirm("Are you sure you want to leave Page Two");
    };
    canActivateChild():boolean{
        return confirm("Are you sure you want to enter Child Three");
    };
}