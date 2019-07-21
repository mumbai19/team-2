import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ip } from '../shared/ip';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  providers: [HttpClient]
})
export class ProfileComponent implements OnInit {
  private userDetails: any;

  constructor(private client: HttpClient) { }

  ngOnInit() {
    this.client.get(ip + "getUserProfile/1").subscribe((output) => {
      this.userDetails = output['data'];
    }
    );
  }
}