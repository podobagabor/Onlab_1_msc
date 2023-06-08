import { Component, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { FormControl, FormGroup } from '@angular/forms'
import { AuthenticationService } from '../authentication.service';
import { User } from 'src/app/shared/models';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {

  constructor(private authService: AuthenticationService, private router: Router, @Inject(DOCUMENT) private document: Document) { }

  form = new FormGroup({
    email: new FormControl<string>(''),
    password: new FormControl<string>(''),
  })

  login() {
    this.authService.login({ email: this.form.controls.email.value || "", password: this.form.controls.password.value || "" }).subscribe(response => {
      if(response) {
        localStorage.setItem("userId",response.id.toString());
        this.router.navigateByUrl("/dashboard");
      }
    })
  }
}
