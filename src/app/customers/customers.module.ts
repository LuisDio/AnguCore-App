import { NgModule }      from '@angular/core';
import { FormsModule }      from '@angular/forms';
// Thiis import of of common module from the BrowserModule
import { CommonModule } from '@angular/common';

import { CustomersComponent } from './customers.component';
// automatically registered for us using the CLI
import { CustomersListComponent } from './customers-list/customers-list.component';
import { FilterTextboxComponent } from './customers-list/filter-textbox.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports:      [ CommonModule, SharedModule, FormsModule ],
  declarations: [ CustomersComponent, CustomersListComponent, FilterTextboxComponent ],
  // we import our customer component as well 
  // so anyone using it can access it
  exports: [ CustomersComponent ]
})
export class CustomersModule { }