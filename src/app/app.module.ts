import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FoodcategoriesComponent } from './foodcategories/foodcategories.component';
import { AllfooddetailsComponent } from './allfooddetails/allfooddetails.component';
import { HomeStartComponent } from './home-start/home-start.component';
import { AppRoutingService } from './appRouting.service';
import { SingleProductDetailComponent } from './single-product-detail/single-product-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    FoodcategoriesComponent,
    AllfooddetailsComponent,
    HomeStartComponent,
    SingleProductDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingService
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
