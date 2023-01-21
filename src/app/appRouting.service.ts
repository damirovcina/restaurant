import {  NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AllFoodDetailsComponent } from "./all-food-details/all-food-details.component";
import { FoodCategoriesComponent } from "./food-categories/food-categories.component";
import { HomeStartComponent } from "./home-start/home-start.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { SingleProductDetailComponent } from "./single-product-detail/single-product-detail.component";

const appRoutes: Routes = [
    {path: '', component: HomeStartComponent },
    {path: 'categories', component: FoodCategoriesComponent},
    {path: 'categories/:id/:name/:thumb' , component: SingleProductDetailComponent},
    {path: 'details', component: AllFoodDetailsComponent },
    {path: '**' , component: PageNotFoundComponent}
] 

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingService {

}