import { Injectable } from '@angular/core';
import { Product } from './product.model';
import { Observable } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';



@Injectable({
    providedIn: 'root'
  })
  export class ProductService {

   

 products: Product[] = [
    { Name: 'Product 1', Code: 'P1001', Qty: 10, Price: 29.99 },
    { Name: 'Product 2', Code: 'P1002', Qty: 20, Price: 39.99 },
    { Name: 'Product 3', Code: 'P1003', Qty: 15, Price: 34.99 },
    { Name: 'Product 4', Code: 'P1004', Qty: 5, Price: 9.99 },
    { Name: 'Product 5', Code: 'P1005', Qty: 8, Price: 19.99 },
    { Name: 'Product 6', Code: 'P1006', Qty: 12, Price: 24.99 },
    { Name: 'Product 7', Code: 'P1007', Qty: 30, Price: 49.99 },
    { Name: 'Product 8', Code: 'P1008', Qty: 25, Price: 44.99 },
    { Name: 'Product 9', Code: 'P1009', Qty: 6, Price: 14.99 },
    { Name: 'Product 10', Code: 'P1010', Qty: 16, Price: 29.99 },
    { Name: 'Product 1', Code: 'P1001', Qty: 10, Price: 29.99 },
    { Name: 'Product 2', Code: 'P1002', Qty: 20, Price: 39.99 },
    { Name: 'Product 3', Code: 'P1003', Qty: 15, Price: 34.99 },
    { Name: 'Product 4', Code: 'P1004', Qty: 5, Price: 9.99 },
    { Name: 'Product 5', Code: 'P1005', Qty: 8, Price: 19.99 },
    { Name: 'Product 6', Code: 'P1006', Qty: 12, Price: 24.99 },
    { Name: 'Product 7', Code: 'P1007', Qty: 30, Price: 49.99 },
    { Name: 'Product 8', Code: 'P1008', Qty: 25, Price: 44.99 },
    { Name: 'Product 9', Code: 'P1009', Qty: 6, Price: 14.99 },
    { Name: 'Product 10', Code: 'P1010', Qty: 16, Price: 29.99 },
    { Name: 'Product 1', Code: 'P1001', Qty: 10, Price: 29.99 },
    { Name: 'Product 2', Code: 'P1002', Qty: 20, Price: 39.99 },
    { Name: 'Product 3', Code: 'P1003', Qty: 15, Price: 34.99 },
    { Name: 'Product 4', Code: 'P1004', Qty: 5, Price: 9.99 },
    { Name: 'Product 5', Code: 'P1005', Qty: 8, Price: 19.99 },
    { Name: 'Product 6', Code: 'P1006', Qty: 12, Price: 24.99 },
    { Name: 'Product 7', Code: 'P1007', Qty: 30, Price: 49.99 },
    { Name: 'Product 8', Code: 'P1008', Qty: 25, Price: 44.99 },
    { Name: 'Product 9', Code: 'P1009', Qty: 6, Price: 14.99 },
    { Name: 'Product 10', Code: 'P1010', Qty: 16, Price: 29.99 },
    
   
  ];

  filteredItems: string[] = [];
  constructor() {
      
  }

  getAllProducts(): Product[] {
    return this.products;
  }
  

  addProduct(product: Product): void {
    this.products.push(product);
    
  }
  removeProduct(name: string): void {
    this.products = this.products.filter(product => product.Name !== name);
  }
  
  }
  
   // Anonymous function expression assigned to a variable to filter items
  
  

 