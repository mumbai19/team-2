import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { StaticService } from '../shared/services/static.service';
import { Router } from '@angular/router';
import { ip } from '../shared/ip';

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
    this.client.get(ip + 'getproduct').subscribe(
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
