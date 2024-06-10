import { Component, OnInit } from '@angular/core';
import { Product } from '../product.model';
import { ProductService } from '../product.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ViewChild } from '@angular/core';
import { MatPaginator,PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';





@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  products: Product[] = [];
  // displayedColumns: string[] = ['name', 'code', 'qty', 'price'];
  newProduct: Product = { Name: '', Code: '', Qty: 0, Price: 0 };
  pageSize = 5;
  pageSizeOptions: number[] = [5, 10, 20];
  pageEvent: PageEvent;

  dataSource = new MatTableDataSource<Product>();

  @ViewChild(MatPaginator) paginator: MatPaginator;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  
  


  constructor(private productService: ProductService,private _formBuilder: FormBuilder,private snackBar: MatSnackBar) { 
    this.firstFormGroup = this._formBuilder.group({
      firstControl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondControl: ['', Validators.required]
    });
  
  }

  ngOnInit(): void {
  
  }

  getAllProducts():void{

    this.products = this.productService.getAllProducts();
  

 
  }
  
  addProduct(): void {
    this.productService.addProduct(this.newProduct);
    this.newProduct = { Name: '', Code: '', Qty: 0, Price: 0 }; // Reset form
    this.getAllProducts(); // Refresh the product list
    this.snackBar.open('Product added successfully!', 'Close', {
      duration: 3000
    });

   
  }
  removeProduct(name: string): void {
    this.productService.removeProduct(name);
    this.getAllProducts(); // Refresh the product list
  }
  

  onSubmit() {
    console.log(this.firstFormGroup.value, this.secondFormGroup.value);
  }

  handlePageEvent(event: PageEvent) {
    this.pageSize = event.pageSize;
    this.pageEvent = event;
  }

  removeProduct1(product: Product): void {
    const index = this.products.indexOf(product);
    if (index >= 0) {
      this.products.splice(index, 1);
    }
  
}
}
