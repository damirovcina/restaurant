import {  NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AllfooddetailsComponent } from "./allfooddetails/allfooddetails.component";
import { FoodcategoriesComponent } from "./foodcategories/foodcategories.component";
import { HomeStartComponent } from "./home-start/home-start.component";
import { SingleProductDetailComponent } from "./single-product-detail/single-product-detail.component";

const appRoutes: Routes = [
    {path: '', component: HomeStartComponent },
    {path: 'categories', component: FoodcategoriesComponent },
    {path: 'details', component: AllfooddetailsComponent },
    {path: 'details/:id/:name', component: SingleProductDetailComponent },
] 

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingService {

}