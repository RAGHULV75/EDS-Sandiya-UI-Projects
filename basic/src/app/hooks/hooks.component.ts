import { Component, OnInit } from '@angular/core';
import { OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy, SimpleChanges, Input } from '@angular/core';
 

@Component({
  selector: 'app-hooks',
  templateUrl: './hooks.component.html',
  styleUrls: ['./hooks.component.scss'],
  template: `
    <div>
      <p>{{data}}</p>
      <button (click)="updateData()">Update Data</button>
    </div>
  `

})
export class HooksComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy  {
  @Input() data: string = 'Initial Data';

  constructor() {
    console.log('Constructor called');
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges called', changes);
  }

  ngOnInit() {
    console.log('ngOnInit called');
  }

  ngDoCheck() {
    console.log('ngDoCheck called');
  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit called');
  }

  ngAfterContentChecked() {
    console.log('ngAfterContentChecked called');
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit called');
  }

  ngAfterViewChecked() {
    console.log('ngAfterViewChecked called');
  }

  ngOnDestroy() {
    console.log('ngOnDestroy called');
  }

  updateData() {
    this.data = 'Updated Data';
  }

}
