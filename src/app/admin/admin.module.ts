import { ComponentLoaderDirective } from './../component-loader.directive';
import { MastersComponent } from './masters/masters.component';
import { SecondComponentComponent } from './second-component/second-component.component';
import { FirstComponentComponent } from './first-component/first-component.component';
import { AdminRoutingModule } from './admin-routing/admin-routing.module';

import { RepeaterDirective } from './../repeater.directive';
import { CheckboxprinterComponent } from './checkboxprinter/checkboxprinter.component';
import { StatusValidDirective } from './../status-valid.directive';
import { ValidateuseridDirective } from './../validateuserid.directive';
import { FormsModule } from '@angular/forms';
import { ProjectsComponent } from './projects/projects.component';
import { DashboardService } from './../dashboard.service';
import { MyProfileComponent } from './my-profile/my-profile.component'
import { AboutComponent } from './about/about.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProjectdetailsComponent} from './projectdetails/projectdetails.component';



import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { ProjectComponent} from './project/project.component';
import {  NumberToWordsPipe } from './../number-to-words.pipe';
import { FilterPipe } from './../filter.pipe';
import "@angular/compiler";
import {MatDialogModule} from '@angular/material/dialog';
import {MatCardModule} from '@angular/material/card';






@NgModule({
  declarations: [
    DashboardComponent,
    ComponentLoaderDirective,    
    AboutComponent,
    MyProfileComponent,
    ProjectsComponent,
    ValidateuseridDirective,
    StatusValidDirective,
    ProjectComponent,
    CheckboxprinterComponent,
    NumberToWordsPipe,
    FilterPipe,ProjectdetailsComponent,
    FirstComponentComponent,
    SecondComponentComponent,MastersComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    AdminRoutingModule,
    MatDialogModule,
    MatCardModule

    
  ],
  exports:[
    DashboardComponent,
    ProjectdetailsComponent,
    AboutComponent,
    MyProfileComponent,
    ProjectsComponent,
    ProjectComponent,
    CheckboxprinterComponent,
    NumberToWordsPipe,
    FilterPipe,AdminRoutingModule
  ],
  providers:[DashboardService],
  entryComponents:[FirstComponentComponent,SecondComponentComponent]
})
export class AdminModule { }
