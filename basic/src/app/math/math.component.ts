import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-math',
  templateUrl: './math.component.html',
  styleUrls: ['./math.component.scss'],
  
    
})
export class MathComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  getRandomNumber(): number {
    return Math.random();
  }

  getSquareRoot(num: number): number {
    return Math.sqrt(num);
  }

  getPower(base: number, exponent: number): number {
    return Math.pow(base, exponent);
  }

  getPI(): number {
    return Math.PI;
  }

}
