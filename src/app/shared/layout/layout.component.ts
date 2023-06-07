import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginDialogComponent } from './login-dialog/login-dialog.component';
import { AuthenticationService } from 'src/app/features/authentication/authentication.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  constructor(private dialog: MatDialog, private authService: AuthenticationService) {}
  ngOnInit(): void {
    this.authService.
  }

  protected url = "/assets/logoKep.png";

  login() {
    const ref = this.dialog.open(LoginDialogComponent);
    ref.afterClosed().subscribe(
      //TODO
    )
  }

}
