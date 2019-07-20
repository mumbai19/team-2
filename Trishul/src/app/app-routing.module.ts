import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { CatalogComponent } from './catalog/catalog.component';
import { DonationComponent } from './donation/donation.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  {path: "landing", component: LandingComponent},
  {path: "catalog", component: CatalogComponent},
  {path: 'donations', component: DonationComponent},
  {path: 'profile', component: ProfileComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
