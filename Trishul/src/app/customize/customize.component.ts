import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormBuilder } from '@angular/forms';
import { StaticService } from '../shared/services/static.service';

@Component({
  selector: 'app-customize',
  templateUrl: './customize.component.html',
  styleUrls: ['./customize.component.css'],
  providers: [HttpClient]
})

export class CustomizeComponent implements OnInit {
  private orderDetails: any = {};
  private descrp: string;
  customizeForm: FormGroup;
  product_id: number;

  constructor(private client: HttpClient, private fb: FormBuilder, private ss: StaticService) {
    this.customizeForm = fb.group({
      descrp: this.fb.control('')
    });
  }

  ngOnInit() {

    this.product_id = this.ss.getProductId();
  }

  onSubmit() {
    console.log(this.customizeForm.value.descrp);
    this.orderDetails.product_id = this.product_id;
    this.orderDetails.customer_id = 1;
    this.orderDetails.amount = 100;
    this.orderDetails.color = "blue";
    this.orderDetails.description = this.customizeForm.value.descrp;
    this.client.post("http://10.49.148.116:8000/api/placeCustomOrders", this.orderDetails).subscribe(
      (output) => {
        alert("Submitted successfully");
        if (output['error'] == "false") {
          alert("Submitted successfully");
        }
      }
    );
  }
}