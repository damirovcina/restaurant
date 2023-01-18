import { Component, OnInit } from '@angular/core';
import { CATEGORIES } from '../shared/categories';
import { Category } from '../shared/category';
import { Router } from '@angular/router'


@Component({
  selector: 'app-foodcategories',
  templateUrl: './foodcategories.component.html',
  styleUrls: ['./foodcategories.component.css'],
})
export class FoodcategoriesComponent implements OnInit {
  categories: Category[] = CATEGORIES;


  constructor(private router : Router) {}

  ngOnInit(): void {
  
  }

    onClickDetails() {
      this.router.navigate(['/details'])
    }    
  

}
