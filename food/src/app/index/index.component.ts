import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  currentView:string ='home';
  mShowForm:boolean=true;

   
  constructor() { }

  ngOnInit() {
    
console.log("ngOnInit")
  }

  ngOnChanges(){
    console.log("ngOnChanges")

  }
 

  switchView(view:string){
    this.currentView=view;
    this.mShowForm=false;
   }

}
