import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DonationComponent } from './donation/donation.component';
import { ProductDetailsComponent } from './product-details/product-details.component';

const routes: Routes = [
  {path: 'donations', component: DonationComponent},
  {path: 'product-details', component: ProductDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
