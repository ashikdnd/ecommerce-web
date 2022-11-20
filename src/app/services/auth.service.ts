import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {Subject} from "rxjs";
import {environment as env} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authStatus: Subject<boolean> = new Subject<boolean>();

  constructor(private http: HttpClient, private router: Router) {
  }

  signUp(data: any) {
    return this.http.post(env.apiUrl + 'auth/register', data)
  }

  login(data: any) {
    return this.http.post(env.apiUrl + 'auth/login', data)
  }

  logout() {
    return this.http.post(env.apiUrl + 'logout', {})
  }

  performLogout() {
    localStorage.clear();
    this.authStatus.next(false);
    this.router.navigate(['/']);
  }
}
