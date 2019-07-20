import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  product = {};
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get('http://10.49.148.116:8000/api/getProductDetails/1').subscribe(
      res => {
        console.log(res);
        this.product = res['data'];
      }
    );
  }

}
