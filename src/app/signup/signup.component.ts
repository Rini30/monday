import { CanDeactivateGuardService, CanComponentDeactivate } from './../can-deactivate-guard.service';


import { CountriesService } from './../countries.service';
import { CustomvalidatorsService } from '../customvalidators.service'


import { Country } from './../country';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,FormArray,FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit,CanComponentDeactivate {
  signupform: FormGroup;
  countries:Country[]=[];
  personName:FormGroup;
  canLeave:boolean=true;
  show:boolean=false;

  constructor(private countryService:CountriesService,private dobvalidator:CustomvalidatorsService) { }

  ngOnInit() {
    this.countries=this.countryService.getCountries();
    
    this.signupform=new FormGroup(
      {
        personName:new FormGroup({
        firstName: new FormControl(null,[Validators.required,Validators.minLength(3)]),
        lastName: new FormControl(null,[Validators.required])}),
        email: new FormControl(null,[Validators.required,Validators.email]),
        mobile: new FormControl(null,[Validators.required,Validators.minLength(10)]),
        dateOfBirth: new FormControl(null,[this.dobvalidator.minimumAgeValidation(18)]),
        gender:new FormControl(),
        countryID:new FormControl(),
        receiveNewsLetter: new FormControl(),
        skills:new FormArray([])


      }
    );

    
    this.signupform.valueChanges.subscribe(
      ()=>{
        this.canLeave=false;
        console.log(this.canLeave)

      }
    )

  }
  onSubmitClick(){
    this.show=true;
    console.log(this.signupform.value);
    
  }
  resetFields(){
    this.signupform.reset();
  }
  onRemoveClick(index:number){
    (<FormArray>this.signupform.get("skills")).removeAt(index);


  }
  onAddSkill(){
    var formGroup=new FormGroup({
      skillName:new FormControl(),
      level: new FormControl()
    });
    (<FormArray>this.signupform.get("skills")).push(formGroup)

  }

}
