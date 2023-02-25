import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllFoodDetailsComponent } from './all-food-details/all-food-details.component';
import { FoodCategoriesComponent } from './food-categories/food-categories.component';
import { HomeStartComponent } from './home-start/home-start.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { SingleProductDetailComponent } from './single-product-detail/single-product-detail.component';

const appRoutes: Routes = [
  { path: '', component: HomeStartComponent },
  { path: 'about', component: AboutComponent },
  { path: 'categories', component: FoodCategoriesComponent },
  { path: 'categories/:id', component: SingleProductDetailComponent },
  { path: 'details', component: AllFoodDetailsComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'policy', component: PrivacyPolicyComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingService {}
