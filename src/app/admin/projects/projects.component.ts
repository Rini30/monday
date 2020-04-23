import { FilterPipe } from './../../filter.pipe';
import { ProjectComponent } from './../project/project.component';

import { Posts } from './../../posts';
import { ProjectsService } from './../../projects.service';

import { Component, OnInit, ViewChild, ViewChildren,QueryList, TemplateRef } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Template } from '@angular/compiler/src/render3/r3_ast';



@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
posts:Posts[];
newPosts: Posts= new Posts();
editPosts:Posts=new Posts();
searchPost:Posts=new Posts();
editIndex:number;
deletePosts: Posts=new Posts();
deleteIndex:number;
searchBy:string="userId";
searchText:any;
showcard:boolean=false;
ifBlock:TemplateRef<any>;
elseBlock:TemplateRef<any>;
xyz:boolean;


  constructor(private projectService:ProjectsService) { }

  ngOnInit(){
    this.projectService.getAllUsers()
    .subscribe(
      (response:Posts[])=>{
        this.posts=response;

      }
    )
  }
  onSearch(event:any){

    this.xyz=true;
    
  
    this.searchText=event.target.value;

    this.projectService.searchUsers()
    .subscribe(
      (response:Posts[])=>{
        if(response[this.searchText-1]){
          this.showcard=true;
        
        var p: Posts = new Posts();
        this.searchPost.userId=response[this.searchText-1].userId;
        this.searchPost.id=response[this.searchText-1].id;
        this.searchPost.title=response[this.searchText-1].title;
        this.searchPost.body=response[this.searchText-1].body;
        
        }

        else{
          this.showcard=false;
          console.log("user not found!pls retry")
        } 
        
        
        
        
        
        
             
      }
    )
    
  }
 

  onHideShowDetails(event){
    this.projectService.toggleDetails();
    
  }
  isAllChecked:boolean=false;
  @ViewChildren("prj")proj:QueryList<ProjectComponent>;

  isAllCheckedChange($event){
    console.log("hi");
    let proj=this.proj.toArray;
    for(let i=0;i<proj.length;i++)
    {
      proj[i].isAllCheckedChild(this.isAllChecked);
    }
  }
  onDeleteClick(event,index:number){
    this.deleteIndex=index;
    this.deletePosts.userId=this.posts[index].userId;
    this.deletePosts.id=this.posts[index].id;
    this.deletePosts.title=this.posts[index].title;
    this.deletePosts.body=this.posts[index].body
    
  }
  onDeleteConfirm(){
this.projectService.deleteUsers(this.deleteIndex)
.subscribe(
  (response)=>{
    this.posts.splice(this.deleteIndex,1)
    this.deletePosts.userId=null;
    this.deletePosts.id=null;
    this.deletePosts.title=null;
    this.deletePosts.body=null;
  }

)

  }
  onUpdateClick()
    {
       this.projectService.updateUsers(this.editPosts)
       .subscribe((response:Posts)=>{
        console.log(response)
        var p: Posts = new Posts();
        p.userId = response.userId;
        p.id = response.id;
        p.title = response.title;
        p.body = response.body;
        this.posts[this.editIndex]=p;
        

        this.editPosts.userId = null;
      this.editPosts.id = null;
      this.editPosts.title = null;
      this.editPosts.body = null;

       },()=>{}
         
       )
    }
  onEditClick(event,index:number)
  {
    this.editPosts.userId=this.posts[index].userId;
    this.editPosts.id=this.posts[index].id;
    this.editPosts.title=this.posts[index].title;
    this.editPosts.body=this.posts[index].body
    this.editIndex=index;
  }
  onSaveClick()
  {
    this.projectService.insertUsers(this.newPosts).subscribe((response) => {
      //Add Project to Grid
      var p: Posts = new Posts();
      p.userId = response.userId;
      p.id = response.id;
      p.title = response.title;
      p.body = response.body;
      this.posts.push(p);

      //Clear New Project Dialog - TextBoxes
      this.newPosts.userId = null;
      this.newPosts.id = null;
      this.newPosts.title = null;
      this.newPosts.body = null;
    }, (error) => {
      console.log(error);
    });

   

    

}
}
