import {Component, OnInit} from '@angular/core';
import {AuthService} from "../services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isAuthenticated: boolean = false;

  constructor(private auth: AuthService, private router: Router) {
  }

  ngOnInit(): void {
    if (localStorage.getItem('accessToken')) {
      this.isAuthenticated = true;
    }
    this.auth.authStatus.subscribe((res: boolean) => {
      this.isAuthenticated = res;
    })
  }

  logout() {
    this.auth.logout().subscribe((res: any) => {
      this.auth.performLogout();
    })
  }

}
