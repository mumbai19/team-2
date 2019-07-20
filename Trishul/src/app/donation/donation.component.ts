import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-donation',
  templateUrl: './donation.component.html',
  styleUrls: ['./donation.component.css']
})
export class DonationComponent implements OnInit {
  donationForm: FormGroup;
  cause = [];
  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.donationForm = fb.group({
      cause: this.fb.control(''),
      amount: this.fb.control('')
    });
  }

  ngOnInit() {
    this.http.get('http://10.49.148.116:8000/api/getCause').subscribe(
      res => {
        this.cause = res["data"];
        console.log(this.cause);
      }
    );
  }
  log(i: number) {
    console.log(i);
  }

  donate() {
    console.log(this.donationForm.value);
    
    const obj = {customer_id: 1, cause_id: 1, amount: 10000 };
    this.http.post('http://10.49.148.116:8000/api/submitDonation', obj).subscribe(

      res => {
        console.log(res);
      }
    );
  }

}
