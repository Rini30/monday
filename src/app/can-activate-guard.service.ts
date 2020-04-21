import { Router,CanActivate } from '@angular/router';
import { LoginService } from './login.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CanActivateGuardService implements CanActivate{

  constructor(private loginservice:LoginService,private router: Router) 
  { 

  }
  canActivate():boolean
  { return true;
    // if (this.loginservice.isAuthenticated()){
    //   return true;
    // }
    // else {
    //   this.router.navigate(["login"])
    //   return false;
    // }
  }
}
