import { Component, OnInit } from '@angular/core';
import {HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  providers: [HttpClient]
})
export class ProfileComponent implements OnInit {
  private userDetails:any;

  constructor(private client: HttpClient) { }

  ngOnInit() {
    this.client.get("").subscribe((output)=>
    {
      this.userDetails.userId=output['user_id'];
      this.userDetails.name=output['name'];
      this.userDetails.phoneNo=output['phoneno'];
      this.userDetails.emailId=output['email_id'];
      
    }
    );
  }

}
