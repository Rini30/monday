import { Directive, ElementRef, OnInit, Input,HostListener,HostBinding,Renderer2} from '@angular/core';
import { analyzeAndValidateNgModules } from '@angular/compiler';



@Directive({
  selector: '[appAlert]'
})
export class AlertDirective implements OnInit{
  divElement:any;
    spanElement:any;
    spanText:any;

  @HostBinding("title") title:string;

  constructor(private elementref:ElementRef,private renderer2:Renderer2) { 
       
    console.log("alert is invoked")
  }
  @Input("error") error:string;
  ngOnInit(){
    this.divElement=this.renderer2.createElement("div");
    this.renderer2.setAttribute(this.divElement,'role','alert');
    this.renderer2.setAttribute(this.divElement,'class','alert alert-danger fade show');
    this.renderer2.setStyle(this.divElement,'transition','transform 0.5s');
    this.spanElement=this.renderer2.createElement("span");
    this.renderer2.setAttribute(this.spanElement,'class','message');
    this.spanText=this.renderer2.createText(this.error);
    this.renderer2.appendChild(this.spanElement,this.spanText);
    this.renderer2.appendChild(this.divElement,this.spanElement);
    this.elementref.nativeElement.appendChild(this.divElement);
    
    
    this.title="please try again";
  }
  
  @HostListener("mouseenter",["$event"])

  onMouseEnter(event){
    this.renderer2.setStyle(this.divElement,"transform","scale(1.1)")
    // this.elementref.nativeElement.querySelector(".alert").
    // style.transform="scale(1.1)"

  }
  @HostListener("mouseleave",["$event"])
  onMouseLeave(event){
    this.renderer2.setStyle(this.divElement,"transform","scale(1)")
    // this.elementref.nativeElement.querySelector(".alert").
    // style.transform="scale(1)"

  }
  

}
