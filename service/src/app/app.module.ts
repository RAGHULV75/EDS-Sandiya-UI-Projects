import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import { FormsModule,FormControl } from '@angular/forms'; 
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatTabsModule} from '@angular/material/tabs';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatStepperModule} from '@angular/material/stepper';
import { ReactiveFormsModule} from '@angular/forms';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatPaginatorModule} from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';

import {MatChipsModule} from '@angular/material/chips';
import { CastingComponent } from './casting/casting.component';
// import {COMMA, ENTER} from '@angular/cdk/keycodes';
// import {Component, ElementRef, ViewChild, inject} from '@angular/core';
// import {MatAutocompleteSelectedEvent, MatAutocompleteModule} from '@angular/material/autocomplete';
// import {MatChipInputEvent} from '@angular/material/chips';
// import {Observable} from 'rxjs';
// import {map, startWith} from 'rxjs/operators';








@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    CastingComponent,
    
    
    
    
    
    
  
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatTabsModule,
    MatToolbarModule,
    MatIconModule,
    MatStepperModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    MatPaginatorModule,
    MatTableModule,
    MatChipsModule,
    // MatAutocompleteModule,

    // Component, ElementRef, ViewChild, MatAutocompleteSelectedEvent, Observable,FormControl,
      
    
     

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
