import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { StaticService } from '../shared/services/static.service';
import { RouterModule, Routes, Router } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
  providers: [StaticService]
})
export class ProductDetailsComponent implements OnInit {
  private details:any={};
  product = {};
  constructor(private http: HttpClient, private ss: StaticService,private router: Router, private routerExtensions: RouterModule) { }

  ngOnInit() {
    const product_id = this.ss.getProductId();
    this.http.get('http://10.49.148.116:8000/api/getProductDetails/' + product_id).subscribe(
      res => {
        console.log(res);
        this.product = res['data'];
      }
    );
  }

  addToCart() {
    this.details.product_id=1;
    this.details.customer_id=1;
    this.details.amount=10;
    this.http.post("http://10.49.148.116:8000/api/addtocart",this.details);
  }

}