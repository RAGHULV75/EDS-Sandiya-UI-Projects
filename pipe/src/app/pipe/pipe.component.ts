import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.scss']
})
export class PipeComponent implements OnInit {
  responseData: any;
  title = 'my-first-app';  
  todaydate = new Date();  
  jsonval = {name: 'Alex', age: '25', address:{a1: 'Paris', a2: 'France'}};  
  months = ['Jan', 'Feb', 'Mar', 'April', 'May', 'Jun',  
    'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];  

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getData().subscribe(
      (data: any) => {
        this.responseData = data;
      },
      (error: any) => {
        console.error('Error:', error);
        // Handle error
      }
    );
  }

}
