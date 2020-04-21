import { ProjectsService } from './../../projects.service';
import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Project} from './../../project';

@Component({
  selector: 'app-projectdetails',
  templateUrl: './projectdetails.component.html',
  styleUrls: ['./projectdetails.component.css']
})
export class ProjectdetailsComponent implements OnInit {
  project :Project;

  constructor(private activatedRoute:ActivatedRoute,private projectService:ProjectsService) 
  { 
    this.project= new Project();
  }

  ngOnInit(){
    this.activatedRoute.params.subscribe(
      (params)=>{
       let pid= params['id'];
       this.projectService.getAllUsers().subscribe(
         (data)=>{
           for(let i=0;i<data.length;i++){
             if(data[i].id==pid){
               this.project=data[i]
             }
           }
         }
       )

      }
    )
  }

}
