import { NumberToWordsPipe } from './../../number-to-words.pipe';
import { CheckboxprinterComponent } from './../checkboxprinter/checkboxprinter.component';
import { ProjectsService } from './../../projects.service';
import { Project } from './../../project';
import { Component, OnInit, Input, Output,ContentChild,AfterViewInit,AfterViewChecked, AfterContentInit,AfterContentChecked,SimpleChanges,DoCheck, SimpleChange, OnChanges} from '@angular/core';
import { EventEmitter } from '@angular/core';
import {interval} from 'rxjs';


@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
  @Input("currentproject") project :Project;
  @Input("recordedIndex") i :number;
  @Output() editClick:EventEmitter<any> = new EventEmitter();
  @Output() deleteClick:EventEmitter<any> = new EventEmitter();
  hideDetails:boolean=false;
  mySubscription;


  constructor(public projectService:ProjectsService) { }

  ngOnInit(){
    console.log("ngOnIt is called")
    this.mySubscription=
    this.projectService.mySubject
    .subscribe((hide)=>{
      this.hideDetails=hide;

    }

    )
  }
//   ngAfterViewInit(){
//     console.log("Best Place to access the child components")
//   }
//   ngAfterViewChecked(){
//     console.log("View is checked")

//   }
//   ngAfterContentInit(){
//     console.table('Contents are initializes');

//   }
// ngAfterContentChecked(){
//   console.table("contents are checked.")
// }
//   ngDoCheck(){
//     console.log("DoCheck is running")
//   }
  @ContentChild("selectionBox")selectionBox:CheckboxprinterComponent;
  isAllCheckedChild(b:boolean){
    if(b){
      this.selectionBox.check()
    }
    else {
      this.selectionBox.unCheck()
    }
  }
  // ngOnChanges(simplechange:SimpleChanges){
  //   for (let propName in simplechange){
  //     let chng=simplechange[propName];
  //     let curr=JSON.stringify(chng.currentValue);
  //     let prev=JSON.stringify(chng.previousValue);
  //     console.log(`${propName}:CurrentValue:${curr},previous value:${prev}`)
      



  //   }

  //   console.log("ngOnchanges is executed.")
  // }

  onEditClick(event,i){
    this.editClick.emit({event,i})
    console.log(i);

  }
  onDeleteClick(event,i){
    this.deleteClick.emit({event,i})

  }
  toggleDetails(){
    this.hideDetails=!this.hideDetails
  }

}
