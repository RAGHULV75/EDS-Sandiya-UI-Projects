import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-str',
  templateUrl: './str.component.html',
  styleUrls: ['./str.component.scss'],

  template: `
    <h2>String Manipulation</h2>
    <p>Original String: {{ originalString }}</p>
    <p>Uppercase: {{ toUpperCase() }}</p>
    <p>Lowercase: {{ toLowerCase() }}</p>
    <p>Reversed: {{ reverseString() }}</p>
    <p>Length: {{ getStringLength() }}</p>
  `,

})
export class StrComponent implements OnInit {
  originalString: string = 'Hello, Angular!';

  constructor() { }

  ngOnInit() {
  }
  toUpperCase(): string {
    return this.originalString.toUpperCase();
  }

  toLowerCase(): string {
    return this.originalString.toLowerCase();
  }

  reverseString(): string {
    return this.originalString.split('').reverse().join('');
  }

  getStringLength(): number {
    return this.originalString.length;
  }

}
