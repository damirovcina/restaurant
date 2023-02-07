import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { CategoriesService } from '../categories.service';
import { Category } from '../shared/category';

@Component({
  selector: 'app-single-product-detail',
  templateUrl: './single-product-detail.component.html',
  styleUrls: ['./single-product-detail.component.css'],
})
export class SingleProductDetailComponent implements OnInit {
  singleProduct: Category;

  constructor(
    private route: ActivatedRoute,
    private cateServ: CategoriesService
  ) {}

  ngOnInit(): void {
    this.singleProduct = this.cateServ.getFood(
      Number(this.route.snapshot.params['id'])
    );
  }
}
