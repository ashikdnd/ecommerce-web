import {Injectable} from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor, HttpResponse
} from '@angular/common/http';
import {Observable, tap} from 'rxjs';
import {Router} from "@angular/router";
import {AuthService} from "./auth.service";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private router: Router, private auth: AuthService) {
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    request = request.clone({
      setHeaders: {
        "Authorization": "Bearer " + localStorage.getItem('accessToken')
      }
    });

    return next.handle(request).pipe(
      tap(
        res => {
          console.log(res)
        },
        error => {
          if (error.status === 401) {
            this.auth.performLogout();
          }
        }
      )
    );
  }
}
