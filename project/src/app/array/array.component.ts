import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-array',
  templateUrl: './array.component.html',
  styleUrls: ['./array.component.scss']
})
export class ArrayComponent implements OnInit {
   myarray:number[]=[1,2,3,4,5]
  constructor() { }
  ShowTable:boolean=false;
  aobject:any;

  ngOnInit() {
       console.log("init",this.myarray);
       this.myarray.pop();
       console.log("pop",this.myarray);
       this.myarray.shift();
       console.log("shift",this.myarray);
       this.myarray.unshift(7);
       console.log("unshift",this.myarray)
       this.myarray.push(8);
       console.log("push",this.myarray)
       this.myarray.slice(2);
       console.log("slice",this.myarray)
  }
  // onSubmit() {

  //   this.ShowTable=true;
    // this.aobject=this.getRawValue();

}
