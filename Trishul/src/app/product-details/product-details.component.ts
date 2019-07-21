import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { StaticService } from '../shared/services/static.service';
import { ip } from '../shared/ip';
import { RouterModule, Routes, Router } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
  providers: [StaticService]
})
export class ProductDetailsComponent implements OnInit {
  private details: any = {};
  rendered = false;
  product = {};
  constructor(private http: HttpClient, private ss: StaticService,private router: Router, private routerExtensions: RouterModule) { }

  ngOnInit() {
    const product_id = this.ss.getProductId();
    this.http.get(ip + 'getProductDetails/' + product_id).subscribe(
      res => {
        console.log(res);
        this.product = res['data'];
        this.rendered = true;
      }
    );
  }


  buy() {
    this.http.post(ip + 'pay', {}).subscribe(
      res => {
        alert("Bought item.");
        console.log(res);
      }
    );
  }
  customize() {
    this.ss.setProductId(this.product['product_id']);
    this.router.navigate(['/customize'])
  }

}

