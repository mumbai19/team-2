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
    let details: any={};
    details.customer_id = 1;
    // userDetails.mname = data.mname;
    details.cause_id = 1;
    details.amount = 100;
    // userDetails.username = data.username;
 
    this.http.post('http://10.49.148.116:8000/api/submitDonation', details).subscribe(

      res => {
        console.log(res);
      }
    );
  }

}
