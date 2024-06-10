import { Component, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {
  name: string = '';
  message: string = '';
  inputmessage:string='';
  submitmessag:string='';

  
  keydownMessage: string = '';
  message1: string;


  constructor() { }

  ngOnInit() {
  }


  

  onButtonClick(): void {
    this.message = 'Button was clicked!';
    console.log(this.message);
    
  }
  onInputChange(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    this.inputmessage = `Input changed to: ${inputElement.value}`;
    console.log(this.inputmessage);
  }
  onFormSubmit(): void {
    this.submitmessag = `Form submitted with name: ${this.name}`;
    console.log(this.submitmessag);
  }
  // key events
  //keydown
 

  onKeydown(event: KeyboardEvent): void {
    this.message1 = `Key down: ${event.key}`;
    console.log(`Key down: ${event.key}`);
  }

  onKeyup(event: KeyboardEvent): void {
    this.message1 = `Key up: ${event.key}`;
    console.log(`Key up: ${event.key}`);
  }

  onKeypress(event: KeyboardEvent): void {
    this.message1 = `Key press: ${event.key}`;
    console.log(`Key press: ${event.key}`);
  }
}
 
  

