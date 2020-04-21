import { MastersComponent } from './../masters/masters.component';
import { AboutComponent } from './../about/about.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes =[
  {path:"",children:[
    {path:"about",component:AboutComponent,data:{linkIndex:4}},
  {path:"masters",component:MastersComponent}]
  }
]



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports:[RouterModule]
})
export class AdminRoutingModule {


  
 }

