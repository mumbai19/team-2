import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StaticService {
  static product_id: number;
  constructor() { }

  getProductId() {
    return StaticService.product_id;
  }

  setProductId(product_id: number) {
    StaticService.product_id = product_id;
  }
}


