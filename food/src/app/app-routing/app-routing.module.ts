import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, Routes } from '@angular/router';
import { FormComponent } from '../form/form.component';
import { IndexComponent } from '../index/index.component';

const routes:Routes=
[
 {path:'index',component:IndexComponent} ,
{path:'form',component:FormComponent},


]

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class AppRoutingModule { }
