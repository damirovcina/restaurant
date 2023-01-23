import { Component} from '@angular/core';
import { Categories } from '../shared/categories';
import { Category } from '../shared/category';
import { Router } from '@angular/router'



@Component({
  selector: 'app-foodcategories',
  templateUrl: './food-categories.component.html',
  styleUrls: ['./food-categories.component.css'],
})

export class FoodCategoriesComponent  {
  categories: Category[] = Categories;


  constructor(private router : Router) {}

    onClickDetail(id: number) {
      this.router.navigate(['/categories', id ]);
    }    
  
}
