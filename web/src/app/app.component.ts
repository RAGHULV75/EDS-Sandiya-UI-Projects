import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'web';
  mShowAbout:boolean=false;
  mShowHome:boolean=false;
  array=[];
  object={}
  test:any="TESTJKJKKHKKJJOK";
  onClickAbout(){
    this.mShowAbout=true;
  }
  onClickHome()
  {
    this.mShowHome=true;
  }
}
