import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-single-product-detail',
  templateUrl: './single-product-detail.component.html',
  styleUrls: ['./single-product-detail.component.css']
})
export class SingleProductDetailComponent implements OnInit {
  singleProduct: {id: number, name: string, thumb: string};

  

  constructor(private route: ActivatedRoute){}

  ngOnInit(): void {
    this.singleProduct = {
      id: this.route.snapshot.params['id'],
      name: this.route.snapshot.params['name'],
      thumb: this.route.snapshot.params['thumb'],
    };
  }
}
