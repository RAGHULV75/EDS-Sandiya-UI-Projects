import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-char',
  templateUrl: './char.component.html',
  styleUrls: ['./char.component.scss'],
  template: `
    <h2>Character Operations</h2>
    <p>Original String: {{ originalString }}</p>
    <p>Character at Index 0: {{ getCharAt(0) }}</p>
    <p>Character Code at Index 0: {{ getCharCodeAt(0) }}</p>
    <p>String from Char Code 65: {{ getStringFromCharCode(65) }}</p>
  `
})
export class CharComponent implements OnInit {
  originalString: string = 'Hello, Angular!';
  

  constructor() { }

  ngOnInit() {
  }
  getCharAt(index: number): string {
    return this.originalString.charAt(index);
  }

  getCharCodeAt(index: number): number {
    return this.originalString.charCodeAt(index);
  }

  getStringFromCharCode(charCode: number): string {
    return String.fromCharCode(charCode);
  }

}
