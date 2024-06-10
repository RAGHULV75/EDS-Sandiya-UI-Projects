import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';

import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatListModule} from '@angular/material/list';
import { CommonModule } from '@angular/common';
import { FrontpComponent } from './frontp/frontp.component';
import { FormComponent } from './form/form.component';
import { FormGroup, FormControl, Validators } from '@angular/forms';

// import { RatingModule } from 'ng-starrating';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FrontpComponent,
    FormComponent,
    
  ],
  imports:[
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatListModule,
    CommonModule,
    FormGroup,
    FormControl,
    Validators
    
    // RatingModule
    
     
    
  ],
  
    
  
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {



 }
