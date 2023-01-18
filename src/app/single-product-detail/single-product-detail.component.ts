import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'


@Component({
  selector: 'app-single-product-detail',
  templateUrl: './single-product-detail.component.html',
  styleUrls: ['./single-product-detail.component.css']
})
export class SingleProductDetailComponent implements OnInit {


   product: {id: number, name: string}  

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.product = {
      id: this.route.snapshot.params['id'],
      name: this.route.snapshot.params['name']
    }
  }


}
