import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { CatalogComponent } from './catalog/catalog.component';
import { DonationComponent } from './donation/donation.component';
import { ProfileComponent } from './profile/profile.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CustomizeComponent } from './customize/customize.component';
import { AdminDashComponent } from './admin-dash/admin-dash.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { AddProductComponent } from './add-product/add-product.component';

const routes: Routes = [
  {path: '', component: LandingComponent},
  {path: 'donations', component: DonationComponent},
  {path: 'product-details', component: ProductDetailsComponent},
  {path: 'landing', component: LandingComponent},
  {path: 'catalog', component: CatalogComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'customize', component: CustomizeComponent},
  {path: 'about-us', component: AboutUsComponent},
  {path: 'admin-dash', component: AdminDashComponent},
  {path: 'add-product', component: AddProductComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
