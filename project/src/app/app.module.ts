import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableComponent } from './table/table.component';
import { ReactiveFormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { FormComponent } from './form/form.component';
import {MatTableModule} from '@angular/material/table';
import { MatRadioModule } from '@angular/material';
import { ArrayComponent } from './array/array.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { WebsiteComponent } from './website/website.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FooditemComponent } from './fooditem/fooditem.component';
import { ProductService } from './fooditem/fooditem.service';
import { Product } from './fooditem.model';





@NgModule({
  declarations: [
    //Always Component
    AppComponent,
    TableComponent,
    FormComponent,
    ArrayComponent,
    WebsiteComponent,
    FooditemComponent ,
    ProductService,
    
  ],
  imports: [
    //Others
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    FormsModule ,
    MatTableModule,
    MatRadioModule,
    MatCheckboxModule,
    FlexLayoutModule,
    
    ProductService,
    Product ,
    
  ],
  exports:[AppComponent],
  providers: [],
  bootstrap: [AppComponent]
  
})
export class AppModule {
    
   
 }
