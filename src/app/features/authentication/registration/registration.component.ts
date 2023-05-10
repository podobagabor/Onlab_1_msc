import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {

  form = new FormGroup({
    email: new FormControl<string>('',Validators.required),
    firstPassword: new FormControl<string>('',Validators.required),
    secondPassword: new FormControl<string>('',Validators.required),
    userName: new FormControl<string>('',Validators.required),
    fullName: new FormControl<string>('',Validators.required),
  })
  constructor(private authenticationService: AuthenticationService, private router: Router) {}

  registration() {
    if(this.form.controls.firstPassword.value === this.form.controls.secondPassword.value && this.form.valid) {
      this.authenticationService.registration({email: this.form.controls.email.value!,name: this.form.controls.fullName.value!,userName: this.form.controls.userName.value!,password: this.form.controls.firstPassword.value!}).subscribe( value => {
        if(value.succeeded) {
          this.router.navigateByUrl("login");
          localStorage.setItem("registratonSuccess",JSON.stringify(true));
        }
      })
    }
  }
  
}
