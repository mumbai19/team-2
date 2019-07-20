import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { StaticService } from '../shared/services/static.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
  providers: [StaticService]
})
export class ProductDetailsComponent implements OnInit {

  product = {};
  constructor(private http: HttpClient, private ss: StaticService) { }

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
  }

}
