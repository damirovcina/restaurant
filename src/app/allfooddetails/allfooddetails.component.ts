import { Component, OnInit } from '@angular/core';
import { CATEGORIES } from '../shared/categories';
import { Category } from '../shared/category';

@Component({
  selector: 'app-allfooddetails',
  templateUrl: './allfooddetails.component.html',
  styleUrls: ['./allfooddetails.component.css'],
})
export class AllfooddetailsComponent implements OnInit {
  categories: Category[] = CATEGORIES;
  constructor() {}

  ngOnInit(): void {}
}
