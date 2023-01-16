import { Component, OnInit } from '@angular/core';
import { CATEGORIES } from '../shared/categories';
import { Category } from '../shared/category';

@Component({
  selector: 'app-foodcategories',
  templateUrl: './foodcategories.component.html',
  styleUrls: ['./foodcategories.component.css'],
})
export class FoodcategoriesComponent implements OnInit {
  categories: Category[] = CATEGORIES;
  constructor() {}

  ngOnInit(): void {}
}
