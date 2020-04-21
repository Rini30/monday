import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Login} from './login';
import {JwtHelperService} from '@auth0/angular-jwt';



@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpclient:HttpClient, private route:Router,private jwtHelperService:JwtHelperService) { }
  currentUserName:string=null;
  public Login(login: Login):
  Observable<any>{
    return this.httpclient.post<any>('https://reqres.in/api/login',login,{responseType:"json"})
    .pipe(map(
      user=>{
        if(user){
            console.log(JSON.stringify(user))
          this.currentUserName=user;
          sessionStorage.currentUser=JSON.stringify(user)
          
        }
    

        return user;
      }
    )

    )
  }


public logout(){
  console.log('logged out')
  sessionStorage.removeItem("currentUser")
  this.route.navigateByUrl('login');
}
// public isAuthenticated():boolean{
//   var token="";console.log(token)
  
//   if (this.jwtHelperService.isTokenExpired())
//   {
//     return false;
//   }
//   else{
//     return true;
//   }
// }
}
