import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user = {username: '', password: '', remember: false};

  constructor(public dialogRef: MatDialogRef<LoginComponent>) { }

  ngOnInit(): void {
    this.dialogRef.updatePosition({top: ' 30px ', right: ' 40px '});
  }

  // tslint:disable-next-line:typedef
  onSubmit() {
    console.log('User: ', this.user);
    this.dialogRef.close();
  }

}
