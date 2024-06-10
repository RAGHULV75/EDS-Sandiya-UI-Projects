import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-class',
  templateUrl: './class.component.html',
  styleUrls: ['./class.component.scss']
})
export class ClassComponent implements OnInit {
  items: string[] = ['Apple', 'Banana', 'Cherry', 'Date', 'Fig', 'Grape'];
  filteredItems: string[] = [];
  items1: string[] = ['Apple', 'Banana', 'Cherry', 'Date', 'Fig', 'Grape'];
  reversedItems: string[] = [];



  constructor() {
    
  
   }

  ngOnInit() {

  }

  //method
  myMethod(): string {
    return 'Hello from myMethod!';
  }
  onButtonClick(): void {
    alert(this.myMethod());
  }

  // named function
  myNamedFunction(): string {
    return 'Hello from myNamedFunction!';
  }

  showAlert(): void {
    alert(this.myNamedFunction());
  }
  // function expression
  


  // Anonymous function expression assigned to a variable to filter items
  filterItems = function(searchTerm: string): void {
    this.filteredItems = this.items.filter(item => item.toLowerCase().includes(searchTerm.toLowerCase()));
  };

  // Named function expression to reverse items
  reverseItems = function reverse(array: string[]): string[] {
    return array.reverse();
  };

  // Method to update reversedItems
  updateReversedItems(): void {
    this.reversedItems = this.reverseItems(this.items1); // Spread operator to clone array
  }
}

class Animal {
  // Properties
  name: string;
  age: number;

  // Constructor
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }


 
}
