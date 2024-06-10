import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
  template: `
  <h2>List and Array Map Example</h2>
  <p>Original Numbers: {{ numbers }}</p>
  <p>Squared Numbers: {{ squaredNumbers }}</p>
  <p>Original Users: {{ users | json }}</p>
  <p>Usernames: {{ usernames }}</p>
`
})
export class MapComponent implements OnInit {

  numbers: number[] = [1, 2, 3, 4, 5];
  squaredNumbers: number[];

  users = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
    { id: 3, name: 'Charlie' }
  ];
  usernames: string[];
  constructor() { }

  ngOnInit() : void {
    // Using map to square each number
    this.squaredNumbers = this.numbers.map(num => num * num);

    // Using map to extract usernames
    this.usernames = this.users.map(user => user.name);
  
  }

}
