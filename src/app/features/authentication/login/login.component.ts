import { Component } from '@angular/core';
import { FormControl, FormGroup} from '@angular/forms'
import { AuthenticationService } from '../authentication.service';
import { User } from 'src/app/shared/models';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private authService: AuthenticationService, private router: Router) {}

  form = new FormGroup({
    email: new FormControl<string>(''),
    password: new FormControl<string>(''),
  })

  login() {
    this.authService.login({email: this.form.controls.email.value || "", password: this.form.controls.password.value || ""}).subscribe( value => {
      if(value.succeeded === true) {
        this.router.navigateByUrl("dashboard");
        console.log("belép");
      }
    })
  }
}
