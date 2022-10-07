import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BannerComponent} from './banner/banner.component';
import {FeaturedProductsComponent} from './featured-products/featured-products.component';
import {Route, RouterModule} from "@angular/router";
import {HomeComponent} from './home/home.component';
import {MatButtonModule} from "@angular/material/button";
import {ProductsComponent} from './products/products.component';
import {MatSelectModule} from "@angular/material/select";
import {MatTabsModule} from "@angular/material/tabs";

const routes: Route[] = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'product-info',
    component: ProductsComponent
  }
]

@NgModule({
  declarations: [
    BannerComponent,
    FeaturedProductsComponent,
    HomeComponent,
    ProductsComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    MatButtonModule,
    MatSelectModule,
    MatTabsModule
  ]
})
export class HomeModule {
}
