import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AuthenticationService } from 'src/app/features/authentication/authentication.service';

@Component({
  selector: 'app-login-dialog',
  templateUrl: './login-dialog.component.html',
  styleUrls: ['./login-dialog.component.css']
})
export class LoginDialogComponent {
  constructor(private authService: AuthenticationService) {}

  form = new FormGroup({
    email: new FormControl<string>(''),
    password: new FormControl<string>(''),
  })

  login() {
    this.authService.login({email: this.form.controls.email.value || "", password: this.form.controls.password.value || ""}).subscribe( value => {
      if(value.succeeded === true) {
        console.log("belép");
      }
    })
  }
}
