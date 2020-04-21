import { AbstractControl } from '@angular/forms';
import { Injectable } from '@angular/core';
import { FormGroup, FormControl,FormArray,FormBuilder, Validators,ValidatorFn,ValidationErrors } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class CustomvalidatorsService {

  constructor() { }

  public  minimumAgeValidation(minAge:number):ValidatorFn
  {
    return(control:AbstractControl):ValidationErrors|null =>{
      if (!control.value)
        return null;
      var today = new Date();
      var dateOfBirth= new Date (control.value);
      var difference=Math.abs(today.getTime()-dateOfBirth.getTime());
      var difference_in_days=(difference/(1000*3600*24))/365;
      console.log(difference_in_days)

      if(difference_in_days>minAge)
      return null;
      else 
      return{minAge:{valid:false}};

      }



    }
  }

