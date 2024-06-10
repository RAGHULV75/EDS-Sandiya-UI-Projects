import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import { FormComponent } from './form/form.component';
import { FormGroup, FormControl, Validators, FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatCheckboxModule, MatFormField, MatFormFieldModule, MatIconModule, MatRadioButton, MatRadioModule, MatSelectModule } from '@angular/material';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexModule } from '@angular/flex-layout';
import { FlexLayoutModule } from '@angular/flex-layout';
import { DemoformComponent } from './demoform/demoform.component';
import { AppRoutingModule } from './app-routing.module';
import {MatCardModule} from '@angular/material/card';




@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    FormComponent,
    DemoformComponent,
    
  ],
  imports: [
    BrowserModule,
    MatInputModule,
    MatButtonModule,
    MatTableModule,
    // FormGroup, 
    // FormControl, 
    // Validators,
    BrowserModule,
    // FormBuilder,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    FlexModule,
    FlexLayoutModule,
    MatCheckboxModule,
    BrowserAnimationsModule,
    AppRoutingModule,
     ReactiveFormsModule,
     MatFormFieldModule,
    MatCheckboxModule,
    MatRadioModule,
    MatIconModule,
    MatInputModule,
    MatSelectModule,
    FormsModule,
    MatCardModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
