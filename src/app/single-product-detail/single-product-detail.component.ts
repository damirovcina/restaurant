import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { CategoriesService } from '../categories.service';
import { Categories } from '../shared/categories';
import { Category } from '../shared/category';

@Component({
  selector: 'app-single-product-detail',
  templateUrl: './single-product-detail.component.html',
  styleUrls: ['./single-product-detail.component.css'],
})
export class SingleProductDetailComponent implements OnInit {
  singleProduct: Category[];
  sveKategorije: Category[] = Categories;
  // singleProductValue : any

  constructor(
    private route: ActivatedRoute,
    private cateServ: CategoriesService
  ) {}

  ngOnInit(): void {
    const id = +this.route.snapshot.params['id'];
    this.singleProduct = [this.cateServ.getFooooooood(id)];

    this.route.params.subscribe((params: Params) => {
      this.singleProduct = [this.cateServ.getFooooooood(+params['id'])];
    });
    //  this.singleProductValue = JSON.stringify(this.singleProduct)
  }
}
