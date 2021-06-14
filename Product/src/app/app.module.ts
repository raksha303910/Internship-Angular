import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AllProductsComponent } from './all-products/all-products.component';
import { StarPipe } from './star.pipe';


@NgModule({
  declarations: [
    AppComponent,
    AllProductsComponent,
    StarPipe,
 
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
