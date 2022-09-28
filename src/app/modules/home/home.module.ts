import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannerComponent } from './banner/banner.component';
import { FeaturedProductsComponent } from './featured-products/featured-products.component';



@NgModule({
  declarations: [
    BannerComponent,
    FeaturedProductsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class HomeModule { }
