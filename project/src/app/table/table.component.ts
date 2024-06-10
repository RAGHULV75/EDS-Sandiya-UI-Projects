import { Component, OnInit } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { FormGroup,FormArray,Validators } from '@angular/forms';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
  

})
export class TableComponent implements OnInit {

  
  profileForm = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required)
  
    
    
    
    
  });
  
  


  onSubmit() {


    let formValuesArray: any[] = [];

    if (this.profileForm.valid) {
      // Form is valid, proceed with submission
      let formValuesArray: any[] = [];
      formValuesArray.push(this.profileForm.get('firstName').value);
      formValuesArray.push(this.profileForm.get('lastName').value);
      console.log(formValuesArray);
    } else {
      // Form is invalid, handle accordingly (e.g., display error messages)
    }
    
    console.warn(this.profileForm.value);
    
    
  }

  

constructor() { }

  ngOnInit() {
   

}}
