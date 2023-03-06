import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { FoodCategoriesComponent } from './food-categories/food-categories.component';
import { AllFoodDetailsComponent } from './all-food-details/all-food-details.component';
import { HomeStartComponent } from './home-start/home-start.component';
import { AppRoutingService } from './appRouting.service';
import { SingleProductDetailComponent } from './single-product-detail/single-product-detail.component';
import { CategoriesService } from './categories.service';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { TermsOfUseComponent } from './terms-of-use/terms-of-use.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    FoodCategoriesComponent,
    AllFoodDetailsComponent,
    HomeStartComponent,
    SingleProductDetailComponent,
    PageNotFoundComponent,
    AboutComponent,
    ContactComponent,
    PrivacyPolicyComponent,
    TermsOfUseComponent,
    FooterComponent,
    HeaderComponent,
  ],
  imports: [BrowserModule, AppRoutingService, HttpClientModule],
  providers: [CategoriesService],
  bootstrap: [AppComponent],
})
export class AppModule {}
