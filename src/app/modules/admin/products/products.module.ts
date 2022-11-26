import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NewProductComponent} from './new-product/new-product.component';
import {Route, RouterModule} from "@angular/router";
import {AuthGuard} from "../../../auth/auth.guard";
import {ProductsComponent} from './products.component';
import {MatInputModule} from "@angular/material/input";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatSelectModule} from "@angular/material/select";
import {MatButtonModule} from "@angular/material/button";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";

const routes: Route[] = [
  {
    path: '',
    component: ProductsComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'new-product',
        component: NewProductComponent
      }
    ]
  }
]

@NgModule({
  declarations: [
    NewProductComponent,
    ProductsComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class ProductsModule {
}
