import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-function',
  templateUrl: './function.component.html',
  styleUrls: ['./function.component.scss']
})
export class FunctionComponent implements OnInit {
 
  message1: string="Hello, world! function without argument";
  optionalm: string;
  constructor() { 
   
  
     
   
  }

  ngOnInit() {
    
  }
  
  // function without argument
  message():void{
    this.message1;
  


  }
  //function with argument
  addf(a: number, b: number): number {
    return a + b;
    
  }
  //arrow function without argument
  greet = (): string => 'Hello, world!';


  // arrow function with argument
  multiplynum =(a:number,b:number):number=>a*b;

 //optional parameter
optional(name?: string): void {
    if (name) {
        console.log(`Hello, ${name}!`);
        this. optionalm= `Hello, ${name}!`;
    } else {
        console.log("Hello, world!");
        this.optionalm = "Hello, world!";
    }
  }
  multiplyAndAdd = (a: number, b: number): number => {
    const product = a * b;
    return product + a;
    
  };
  
 
  


}


