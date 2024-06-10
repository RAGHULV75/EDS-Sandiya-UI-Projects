import { Component, OnInit } from '@angular/core';
import { Product } from './fooditem.model';
import { ProductService } from './fooditem.service';


@Component({
  selector: 'app-fooditem',
  templateUrl: './fooditem.component.html',
  styleUrls: ['./fooditem.component.scss']
})
export class FooditemComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  getAllproducts():Product[]{
    return this.getAllproducts();
  }
  
  
}
