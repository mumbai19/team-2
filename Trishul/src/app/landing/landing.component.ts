import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goToProducts() {
    this.router.navigate(['/catalog']);
  }

  goToDonations() {
    this.router.navigate(['/donations']);
  }

  aboutUs() {
    this.router.navigate(['/about-us']);

  }

}
