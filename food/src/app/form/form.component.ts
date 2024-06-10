import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  
  DataArray=[];
  ShowTable:boolean=false;
  aobject:any;
  profileForm:FormGroup;
  // checked = false;
  // indeterminate = false;
  labelPosition: 'before' | 'after' = 'after';
  disabled = false;
  // isMaleChecked = false;
  // isFemaleChecked = false;


  constructor() { 
    this.profileForm = new FormGroup({
      name: new FormControl('', Validators.required),
      age: new FormControl('', Validators.required),
      gender:new FormControl('', Validators.required),
      country:new FormControl('', Validators.required),
      subscribe:new FormControl('', Validators.required),
      
    });
  }

  ngOnInit() {
  }

 
  onSubmit() {

    this.ShowTable=true;
    this.aobject=this.profileForm.getRawValue();
    // let formValuesArray: any[] = [];
    this.DataArray.push(this.aobject)
    console.log("formValuesArray",this.DataArray)
  }

  


}
