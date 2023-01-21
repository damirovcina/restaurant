import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoriesService } from '../categories.service';
import { Category } from '../shared/category';


@Component({
  selector: 'app-single-product-detail',
  templateUrl: './single-product-detail.component.html',
  styleUrls: ['./single-product-detail.component.css']
})
export class SingleProductDetailComponent implements OnInit {
  singleProduct: {id: number, name: string, thumb: string};

  allFood : Category[];

  constructor(private route: ActivatedRoute,
              private cateSer : CategoriesService){}

  ngOnInit(): void {
    this.allFood = this.cateSer.returnAllFood()
    this.singleProduct = {
      id: this.route.snapshot.params['id'],
      name: this.route.snapshot.params['name'],
      thumb: this.route.snapshot.params['thumb'],
    };
  }
}
