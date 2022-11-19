import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, ValidationErrors, Validators} from "@angular/forms";
import {AuthService} from "../../../services/auth.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;

  constructor(private fb: FormBuilder, private auth: AuthService) {
    this.registerForm = this.fb.group({
      first_name: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(30)]],
      last_name: ['', [Validators.maxLength(30),]],
      email: ['', [Validators.required, Validators.email, Validators.maxLength(60)]],
      password: ['', [
        Validators.required, Validators.minLength(6),
        Validators.maxLength(20)]
      ]
    });
  }

  ngOnInit(): void {
  }

  signUp() {
    console.log(this.registerForm.value)
    this.auth.signUp(this.registerForm.value).subscribe((res: any) => {
      console.log(res)
    }, (e) => {
      console.log(e)
    })
  }

}
