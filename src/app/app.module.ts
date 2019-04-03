import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { CustomersModule } from './customers/customers.module';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { OrdersComponent } from './orders/orders.component';

@NgModule({
  imports:      [ BrowserModule, CustomersModule, SharedModule, CoreModule, AppRoutingModule ],
  declarations: [ AppComponent, OrdersComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }