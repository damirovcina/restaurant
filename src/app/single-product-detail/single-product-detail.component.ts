import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
    private cateServ: CategoriesService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.singleProduct = this.cateServ.getFood(
      /* Number(this.route.snapshot.params['id']) */
      this.route.snapshot.params['name']
    );
  }
  goBack() {
    this.router.navigate(['/categories']);
  }
}
