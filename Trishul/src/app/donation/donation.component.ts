import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ip } from '../shared/ip';

@Component({
  selector: 'app-donation',
  templateUrl: './donation.component.html',
  styleUrls: ['./donation.component.css']
})
export class DonationComponent implements OnInit {
  donationForm: FormGroup;
  cause = [];
  causeId: number;
  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.donationForm = fb.group({
      cause: this.fb.control(''),
      amount: this.fb.control('')
    });
  }

  ngOnInit() {
    this.http.get(ip + 'getCause').subscribe(
      res => {
        this.cause = res['data'];
        console.log(this.cause);
      }
    );
  }
  log(i: number) {
    console.log(i);
    this.causeId = i;
    console.log(this.donationForm.value.cause);
  }

  donate() {
    console.log(this.donationForm.value);

    let details: any = {};
    details.customer_id = 1;
    // userDetails.mname = data.mname;
    details.cause_id = 1;
    details.amount = 100;
    // userDetails.username = data.username;

    this.http.post(ip + 'submitDonation', details).subscribe(


      //const obj = {customer_id: 1, cause_id: this.causeId, amount: this.donationForm.value.amount };
      //this.http.post('http://10.49.148.116:8000/api/submitDonation', obj).subscribe(


      res => {
        console.log(res);
      }
    );
  }

}
