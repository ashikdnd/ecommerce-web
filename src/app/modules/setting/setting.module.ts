import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProfileComponent} from './profile/profile.component';
import {Route, RouterModule} from "@angular/router";
import {SettingComponent} from './setting.component';
import {AuthGuard} from "../../auth/auth.guard";

const routes: Route[] = [
  {
    path: '',
    component: SettingComponent,
    children: [
      {
        path: 'profile',
        canActivate: [AuthGuard],
        component: ProfileComponent
      }
    ]
  }
];

@NgModule({
  declarations: [
    ProfileComponent,
    SettingComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ]
})
export class SettingModule {
}
