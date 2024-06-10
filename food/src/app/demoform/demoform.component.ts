import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-demoform',
  templateUrl: './demoform.component.html',
  styleUrls: ['./demoform.component.scss']
})
export class DemoformComponent implements OnInit {
  DataArray=[];
  ShowTable:boolean=false;
  aobject:any;
  profileForm:FormGroup;

  constructor() { 
    this.profileForm = new FormGroup({
      name: new FormControl('', Validators.required),
      department: new FormControl('', Validators.required),
      
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
