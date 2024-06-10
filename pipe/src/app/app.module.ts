import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PipeComponent } from './pipe/pipe.component';
import { HttpClientModule } from '@angular/common/http';

// import { HttpErrorResponse } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    PipeComponent,
   

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    // HttpErrorResponse,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
