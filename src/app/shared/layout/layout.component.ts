import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginDialogComponent } from './login-dialog/login-dialog.component';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {

  constructor(private dialog: MatDialog) {}

  protected url = "/assets/logoKep.png";

  login() {
    const ref = this.dialog.open(LoginDialogComponent);
    ref.afterClosed().subscribe(
      //TODO
    )
  }

}
