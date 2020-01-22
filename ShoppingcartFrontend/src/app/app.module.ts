import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './Component/product/product.component';
import { DashboardComponent } from './Component/dashboard/dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import {MatCardModule,MatButtonModule} from '@angular/material';
import { CartListComponent } from './Component/cart-list/cart-list.component';
import {MatBadgeModule} from '@angular/material/badge';
import {MatFormFieldModule} from '@angular/material/form-field';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    DashboardComponent,
    CartListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatCardModule,
    MatButtonModule,
    MatBadgeModule,
    MatFormFieldModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
