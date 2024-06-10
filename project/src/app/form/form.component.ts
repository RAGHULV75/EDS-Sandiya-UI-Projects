import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  profileForm = new FormGroup({
    name: new FormControl('', Validators.required),
    department: new FormControl('', Validators.required),
    attendance: new FormControl('', Validators.required),
    registerno:new FormControl('', Validators.required),
  });
  DataArray=[];
  ShowTable:boolean=false;
  aobject:any;
  
  constructor() { }

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
