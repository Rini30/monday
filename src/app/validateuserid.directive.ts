import { Directive,Input } from '@angular/core';
import {Validator,AbstractControl, ValidationErrors,NG_VALIDATORS} from "@angular/forms";

@Directive({
  selector: '[appValidateuserid]',
  providers:[{
    provide:NG_VALIDATORS,useExisting:ValidateuseridDirective,multi:true
  }]
})
export class ValidateuseridDirective implements Validator{

  constructor() { 
    console.log("enetered ");
  }

  @Input('appValidateuserid' ) n:number;
 
  validate(control:AbstractControl): ValidationErrors | null

  
  {
     let currentValue=control.value;
     let isValid=currentValue % this.n;
     if (isValid)
     {
       return null;
     }
     else{
       return {divisible:{valid:false}};
     }
  }

}


