import { Posts } from './posts';

import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders }    from '@angular/common/http';
import { Observable,Observer, Subject } from 'rxjs';
import { map } from 'rxjs/operators'
 

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
   public mySubject:Subject<boolean>;
   
   

  constructor(private httpclient:HttpClient) { 
    this.mySubject= new Subject<boolean>();
  }
  hideDetails:boolean=false;
  
  toggleDetails(){
    this.hideDetails=!this.hideDetails;
   this.mySubject.next(this.hideDetails);
  }


  getAllUsers():Observable<Posts[]>{
     //for authentication based on JWT
  // { var currentUser={token:""}
  // var header= new HttpHeaders();
  // header=header.set("Authorization","Bearer")
  // if(sessionStorage.currentUser!=null)
  // {
  //     currentUser=JSON.parse(sessionStorage.currentUser);
  //     header=header.set("Authentication","Bearer"+currentUser.token);
  //     console.log(header)
  // }
       return this.httpclient.get<Posts[]>('https://jsonplaceholder.typicode.com/posts')
       .pipe(map(
         (data:Posts[])=>{
           for(let i= 0;i<data.length;i++)
           {
             data[i].body+="Aakriti"
           }
           return data

         }

       ))
    
  }
  insertUsers(newPosts:Posts):Observable<Posts>
  {
       return this.httpclient.post<Posts>('https://jsonplaceholder.typicode.com/posts',newPosts)
    
  }
  updateUsers(existUsers:Posts):Observable<Posts>
  {
       return this.httpclient.put<Posts>('https://jsonplaceholder.typicode.com/posts/'+existUsers.id,existUsers)
    
  }
  deleteUsers(id:number):Observable<string>
  {
       return this.httpclient.delete<string>('https://jsonplaceholder.typicode.com/posts/'+id)
    
  }

  searchUsers():Observable<Posts[]>
  {
    return this.httpclient.get<Posts[]>('https://jsonplaceholder.typicode.com/posts')
  }
 
  
  
}
