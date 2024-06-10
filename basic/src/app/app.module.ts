import { NgModule } from '@angular/core';
// import { FormGroup } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FunctionComponent } from './function/function.component';
import { DatatypeComponent } from './datatype/datatype.component';
import { BasicComponent } from './basic/basic.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCheckboxModule, MatFormFieldModule, MatIconModule, MatInputModule, MatRadioModule, MatSelectModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
// import { FormControl} from '@angular/forms';
  // import { Validators } from '@angular/forms';
import { EventsComponent } from './events/events.component';
import { ClassComponent } from './class/class.component';

import { Component, OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy, Input, SimpleChanges } from '@angular/core';
import { StrComponent } from './str/str.component';
import { MathComponent } from './math/math.component';
import { CharComponent } from './char/char.component';
import { MapComponent } from './map/map.component';




@NgModule({
  declarations: [
    AppComponent,
    FunctionComponent,
    DatatypeComponent,
    BasicComponent,
    EventsComponent,
    ClassComponent,
    
    StrComponent,
    MathComponent,
    CharComponent,
    MapComponent,
    
  
  ],
  imports: [
    BrowserAnimationsModule,
    AppRoutingModule,
     ReactiveFormsModule,
     MatFormFieldModule,
    MatCheckboxModule,
    MatRadioModule,
    MatIconModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    FormsModule,
  
   
    // FormControl,
    // Validators
    

    
    


    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
