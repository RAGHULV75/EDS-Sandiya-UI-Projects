import { Component, OnInit } from '@angular/core';
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
    
  });

  constructor() { }

  ngOnInit() {
  }

}
