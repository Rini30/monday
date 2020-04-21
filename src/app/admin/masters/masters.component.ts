import { SecondComponentComponent } from './../second-component/second-component.component';
import { FirstComponentComponent } from './../first-component/first-component.component';
import { ComponentLoaderDirective } from './../../component-loader.directive';
import { Component, OnInit, ComponentFactoryResolver, ViewChild, QueryList, ViewContainerRef, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-masters',
  templateUrl: './masters.component.html',
  styleUrls: ['./masters.component.css']
})
export class MastersComponent implements OnInit {
  masterMenuItems = [
    { itemName: "Countries", displayName: "First Component",Component:FirstComponentComponent },
    { itemName: "ClientLocations", displayName: "Second Component",Component:SecondComponentComponent},
     ];

  // @ViewChild('appComponentLoader', {read: ViewContainerRef}) componentLoader;

  @ViewChildren(ComponentLoaderDirective) componentLoaders:QueryList<ComponentLoaderDirective>
  activeItem: string;
  tabs=[];
 

  constructor(public componentFactoryResolver:ComponentFactoryResolver) { }

  ngOnInit(): void {
  }
  

  menuItemClick(clickMasterMenu:any){
    //console.log(clickMasterMenu)

    this.activeItem=clickMasterMenu.itemName;
    let matchingTabs=this.tabs.filter((tab)=>{
      return tab.itemName == clickMasterMenu.itemName;

    }

    )


    if (matchingTabs.length == 0)
    {
      this.tabs.push({
        tabIndex:this.tabs.length,
        itemName:clickMasterMenu.itemName,
        displayName:clickMasterMenu.displayName
  
      });

    setTimeout(() => {
      console.log(this.componentLoaders)
      var componentLoadersArray = this.componentLoaders.toArray();
      var componentFactory = this.componentFactoryResolver.resolveComponentFactory(clickMasterMenu.Component);
      var viewContainterRef = componentLoadersArray[this.tabs.length - 1].viewContainerRef;
      var componentRef=viewContainterRef.createComponent(componentFactory);
      this.tabs[this.tabs.length-1].viewContainerRef=viewContainterRef

      if(clickMasterMenu.Component.name == "FirstComponentComponent")
      {
        console.log("hi")
        var componentInstance=componentRef.instance as FirstComponentComponent ;
        componentInstance.message="hello first component"
      }
    }, 100);
    

  }

  }

  onClickClose(clickedTab:any){
    
    console.log(clickedTab);
    clickedTab.viewContainerRef.remove();
    this.tabs.splice(this.tabs.indexOf(clickedTab),1);
    if(this.tabs.length>0){
      this.activeItem=this.tabs[0].itemName;
    }

  }
}