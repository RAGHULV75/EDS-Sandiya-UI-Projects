import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-casting',
  templateUrl: './casting.component.html',
  styleUrls: ['./casting.component.scss']
})
export class CastingComponent implements OnInit {

  
  

  constructor() { }

  ngOnInit() {

    // casting as

    let x: unknown = 'hello';
    console.log((x as string).length);

    let someValue: unknown = "this is a string";
    let strLength: number = (someValue as string).length;
    console.log(strLength); // Output: 16

// casting  <>
let x1: unknown = 'hello';
console.log((<string>x1).length);

  let someValue1: unknown = "this is a string";
let strLength1: number = (<string>someValue).length;
console.log(strLength); // Output: 16

// casting any, unknown
let someValue2: any = "this is a string";
let strLength2: number = (someValue as string).length;
console.log(strLength); // Output: 16

let anotherValue: unknown = "this is another string";
let anotherStrLength: number = (anotherValue as string).length;
console.log(anotherStrLength); // Output: 20



// generics
function identity<T>(arg: T): T {
  return arg;
}

let output1 = identity<string>("Hello, Generics!"); // Explicit type
let output2 = identity(42); // Type inference

console.log(output1); // Output: Hello, Generics!
console.log(output2); // Output: 42

// generics multiple parameter

function swap<T, U>(tuple: [T, U]): [U, T] {
  return [tuple[1], tuple[0]];
}

let swappedTuple = swap<string, number>(["hello", 42]);

console.log(swappedTuple); // Output: [42, "hello"]



  }

  
 
  
}


