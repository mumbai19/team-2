import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DonationsPage } from './donations.page';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
const routes: Routes = [
  {
    path: '',
    component: DonationsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [DonationsPage]
})
export class DonationsPageModule {}
