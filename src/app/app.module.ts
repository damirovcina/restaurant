import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FoodcategoriesComponent } from './foodcategories/foodcategories.component';
import { AllfooddetailsComponent } from './allfooddetails/allfooddetails.component';

@NgModule({
  declarations: [
    AppComponent,
    FoodcategoriesComponent,
    AllfooddetailsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
