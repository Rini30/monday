import { FormsModule } from '@angular/forms';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-checkboxprinter',
  templateUrl: './checkboxprinter.component.html',
  styleUrls: ['./checkboxprinter.component.css']
})
export class CheckboxprinterComponent implements OnInit {
  isChecked:boolean=false;

  constructor() { }

  ngOnInit(): void {
  }

  check(){
    this.isChecked=true;
  }
  unCheck(){
    this.isChecked=false;
  }

}
