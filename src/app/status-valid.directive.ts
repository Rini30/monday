import { Directive } from '@angular/core';
import {Validator,AbstractControl, ValidationErrors,NG_VALIDATORS} from "@angular/forms";


@Directive({
  selector: '[appStatusValid]',
  providers:[{
    provide:NG_VALIDATORS,useExisting:StatusValidDirective,multi:true
  }]
})
export class StatusValidDirective implements Validator{


  constructor() { }
validate(control:AbstractControl): ValidationErrors | null{
  let isValid=true;
  if (control.value.ProjectID== control.value.ProjectName)
  {
    isValid=false;
     
  }
  if(isValid){
    return null;
  }
  else{
    return {StatusValidDirective:{valid:false}};
  }


}
}
