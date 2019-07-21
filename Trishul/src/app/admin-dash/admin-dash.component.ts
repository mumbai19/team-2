import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-dash',
  templateUrl: './admin-dash.component.html',
  styleUrls: ['./admin-dash.component.css']
})
export class AdminDashComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  addProduct() {
    this.router.navigate(['/add-product']);
  }
}
