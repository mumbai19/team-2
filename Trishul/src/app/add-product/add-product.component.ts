import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  private productForm: FormGroup;
  constructor(private http: HttpClient, private fb: FormBuilder) {
    this.productForm = fb.group({
      p_name: this.fb.control(''),
      p_descrp: this.fb.control(''),
      color: this.fb.control(''),
      price: this.fb.control('')
    });
  }

  ngOnInit() {
  }

  send() {
    const formData = new FormData();
    formData.append('color', '2');
    formData.append('price', '150');
    formData.append('category_id', '1');

    this.http.post('http://192.168.43.165:5000/getRecommendations', formData).subscribe(
      res => {
        alert('Sent!');
      }
    );
  }

  submit() {
    alert('Submitted');
  }
}


// http://192.168.43.165:5000/getRecommendations