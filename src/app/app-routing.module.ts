import { CanDeactivateGuardService } from './can-deactivate-guard.service';
import { ProjectdetailsComponent } from './admin/projectdetails/projectdetails.component';
import { SignupComponent } from './signup/signup.component';

import { ProjectsComponent } from './admin/projects/projects.component';

import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule, NoPreloading,PreloadAllModules } from '@angular/router';
import {LoginComponent} from './login/login.component';


const routes: Routes = [
  {path:"",redirectTo:"login",pathMatch:"full"},  
  {path:"login",component:LoginComponent,data:{ linkIndex:1 }},
  {path:"signup",component:SignupComponent,canDeactivate:[CanDeactivateGuardService],data:{ linkIndex:2}},
  {path:"dashboard",component:DashboardComponent,data:{ linkIndex:3 }},//canActivate:[CanActivateGuardService]},
  //canActivate:[CanActivateGuardService]},
  {path:"projects",component:ProjectsComponent,data:{linkIndex:5}},//canActivate:[CanActivateGuardService]},
  {path:"projects/view/:id",component:ProjectdetailsComponent,data:{linkIndex:6}},
  {path:"admin",loadChildren: ()=> import ('./admin/admin.module').then(m=>m.AdminModule)}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true,preloadingStrategy:PreloadAllModules})],//enableTracing:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
