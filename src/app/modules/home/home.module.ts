import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannerComponent } from './banner/banner.component';
import { FeaturedProductsComponent } from './featured-products/featured-products.component';
import {Route, RouterModule} from "@angular/router";
import { HomeComponent } from './home/home.component';

const routes: Route[] = [
  {
    path: '',
    component: HomeComponent
  }
]

@NgModule({
  declarations: [
    BannerComponent,
    FeaturedProductsComponent,
    HomeComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ]
})
export class HomeModule { }
