import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../../services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private auth: AuthService, private router: Router) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]]
    })
  }

  ngOnInit(): void {
  }

  login() {
    console.log(this.loginForm.value)
    this.auth.login(this.loginForm.value).subscribe((res: any) => {
      console.log(res)
      if (res.success) {
        localStorage.setItem('accessToken', res.user.token)
        this.auth.authStatus.next(true);
        this.router.navigate(['/']);
      }
    }, (e: any) => {
      console.log(e)
      if (e.status === 401) {
        alert('Invalid login')
      }
    })
  }

}
