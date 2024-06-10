import { Component, OnInit, OnChanges ,DoCheck,AfterContentInit,AfterContentChecked,AfterViewInit,AfterViewChecked,OnDestroy} from '@angular/core';

@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.scss']
})
export class BasicComponent implements OnInit, OnChanges,DoCheck ,AfterContentInit,AfterContentChecked,AfterViewInit,AfterViewChecked,OnDestroy{
  title: string = 'Angular Data Types Example';
  age: number = 30;
  isStudent: boolean = true;
  // Array Type
  hobbies: string[] = ['Reading', 'Gaming', 'Traveling'];
  // Tuple Type
  person: [number, string, boolean] = [1, 'John Doe', true];
  
  many:any[]=[1,"sam"];
  list: number[] = [1, 2, 3, 4, 5];
  marray:string[]=["tamil","english"];

  myDictionary: { [name: string]: any } = {};
  

 
  
   

  constructor() {
    this.myDictionary={
      name1:'apple',
      name2:'orange'
    };
    
    console.log(this.myDictionary['name1']);
  }
  // console.log(this.myDictionary['key1'];
 
  

  ngOnInit(): void {
    console.log('ngOnInit called');
    this.marray;
  }
  
  ngOnChanges(): void {
    console.log('ngOnChanges called');
  }
  ngDoCheck(): void {
    console.log('ngDoCheck called');
  }
  ngAfterContentInit(): void {
    console.log('ngAfterContentInit called');
  }
  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked called');
  }
  ngAfterViewInit(): void {
    console.log('ngAfterViewInit called');
  }
  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked called');
  }
    
  ngOnDestroy(): void {
    console.log('ngOnDestroy called');
  }
  
  
}
