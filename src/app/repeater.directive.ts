import { Directive, ViewContainerRef, TemplateRef, OnInit, Input } from '@angular/core';

@Directive({
  selector: '[appRepeater]'
})
export class RepeaterDirective implements OnInit{

  constructor(private viewContainerRef:ViewContainerRef,private templateRef:TemplateRef<any>)
  { 
    this.viewContainerRef.clear();
  }

  @Input("appRepeater")n:number;
  ngOnInit(){
    console.log("structural")
    for(let i =0;i<this.n;i++){
      this.viewContainerRef.createEmbeddedView(this.templateRef,
        {$implicit:i})
    }
  }

}
