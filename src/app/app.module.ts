import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import {RouterModule,Routes } from '@Angular/router';
import { FormsModule } from '@Angular/forms';

import { AppComponent } from './app.component';
import { ListExpenseComponent } from './Components/list-expense/list-expense.component';
import { AddExpenseComponent } from './Components/add-expense/add-expense.component';

const routers:Routes = [

  {path: 'expenses', component: ListExpenseComponent},
  {path: 'addexpense', component: AddExpenseComponent},
  {path: 'editexpense/:id', component: AddExpenseComponent},
  {path: '', redirectTo:'/expenses',pathMatch:'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    ListExpenseComponent,
    AddExpenseComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routers),
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
