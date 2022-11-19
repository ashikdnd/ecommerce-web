import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CheckoutComponent} from './checkout.component';
import {Route, RouterModule} from "@angular/router";
import {PaymentComponent} from './payment/payment.component';
import {CheckoutItemsComponent} from './checkout-items/checkout-items.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatRadioModule} from "@angular/material/radio";

const routes: Route[] = [
  {
    path: '',
    children: [
      {
        path: '',
        component: CheckoutItemsComponent
      },
      {
        path: 'payment',
        component: PaymentComponent
      }
    ]
  }
]

@NgModule({
  declarations: [
    CheckoutComponent,
    PaymentComponent,
    CheckoutItemsComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule
  ]
})
export class CheckoutModule {
}
