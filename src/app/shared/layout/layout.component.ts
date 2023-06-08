import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginDialogComponent } from './login-dialog/login-dialog.component';
import { AuthenticationService } from 'src/app/features/authentication/authentication.service';
import { User } from '../models';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {
  protected user?: User = undefined;
  constructor(private dialog: MatDialog, private authService: AuthenticationService, private router: Router) {}
  ngOnInit(): void {
    const userId = localStorage.getItem("userId");
    if(userId) {
      this.authService.getUser(Number(userId)).subscribe( value => {
        console.log(value);
        this.user = value;
      })
    }
  }

  protected url = "/assets/logoKep.png";

  login() {
    const ref = this.dialog.open(LoginDialogComponent);
    ref.afterClosed().subscribe(
      //TODO
    )
  }

  logOut() {
    localStorage.clear();
    this.router.navigateByUrl("/login");
  }
}
