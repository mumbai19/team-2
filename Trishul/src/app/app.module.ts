import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { CatalogComponent } from './catalog/catalog.component';
import {HttpClientModule} from '@angular/common/http';
import { DonationComponent } from './donation/donation.component';
import { ProfileComponent } from './profile/profile.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CustomizeComponent } from './customize/customize.component';
import { AdminDashComponent } from './admin-dash/admin-dash.component';
<<<<<<< HEAD
import { SidebarModule } from 'ng-sidebar';
=======
import { AboutUsComponent } from './about-us/about-us.component';
>>>>>>> ef696c369577fb826120b8eec22777abd11d2d45

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    DonationComponent,
    CatalogComponent,
    ProfileComponent,
    ProductDetailsComponent,
    CatalogComponent,
    CustomizeComponent,
    AdminDashComponent,
    AboutUsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    SidebarModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }