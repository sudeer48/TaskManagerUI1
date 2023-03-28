import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthguardServiceService } from '../Services/authguard-service.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard implements CanActivate {
constructor(private AuthguardService:AuthguardServiceService,private router: Router){

}

  canActivate(    
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot){
      //const user = this.AuthguardService.userValue;
      const user='eyJhbGciOiJodHRwOi8vd3d3LnczLm9yZy8yMDAxLzA0L3htbGRzaWctbW9yZSNobWFjLXNoYTI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoic2FpIiwianRpIjoiMDRkZDE4ODAtOGE2My00YzUxLTk1NjctZDY1NWZmMDg4ZTJiIiwiZXhwIjoxNjgwMDgzNDk5LCJpc3MiOiJodHRwOi8vbG9jYWxob3N0OjQ1NjEyLyIsImF1ZCI6Imh0dHA6Ly9sb2NhbGhvc3Q6NDU2MTIvIn0.xHugXvOWi-W3U4AStz0KeEfZK3XKyPf6WI5sEhLsXcE';
        if (user) {
            // logged in so return true
            return true;
        }
    this.router.navigate(['/home']);  
    return false; 

  }
  
}
