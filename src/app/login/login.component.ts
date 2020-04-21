import { RepeaterDirective } from './../repeater.directive';
import { RouterModule,Router } from '@angular/router';
import { LoginService } from './../login.service';
import { Login } from './../login';
import { Component, OnInit } from '@angular/core';
import {AlertDirective } from './../alert.directive';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login:Login=new Login();
  loginError:string=null;


  constructor(private loginService:LoginService,private route:Router) { }



  onLoginClick(event){
    this.loginService.Login(this.login)
    .subscribe(
      (response)=>{
        this.route.navigateByUrl("/dashboard");

      },
      (error)=>{
        
        this.loginError="Invalid UserName /Password";

      }
    )
  }

  ngOnInit(): void {
  }

}
