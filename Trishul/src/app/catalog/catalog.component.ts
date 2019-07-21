import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { StaticService } from '../shared/services/static.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css'],
  providers: [StaticService]
})
export class CatalogComponent implements OnInit {
  private products: any[];
  private product: any;
  constructor(private client: HttpClient, private staticService: StaticService, private router: Router) { }

  ngOnInit() {
    this.client.get('http://10.49.148.116:8000/api/getproduct').subscribe(
      output => {
        this.products = output['data'];
        console.log(this.products)
      }
    );
  }

  goToProductDetails(i: number) {
    console.log(i);
    const product_id = this.products[i].product_id;
    this.staticService.setProductId(product_id);
    this.router.navigate(['/product-details']);
  }

}
