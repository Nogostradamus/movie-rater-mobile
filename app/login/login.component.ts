import { Component, OnInit, ViewChild } from '@angular/core';
import * as ApplicationSettings from "application-settings";
import { UserService } from '../services/user.service';
import { GlobalService } from '../services/global.service';
import { RadDataFormComponent } from 'nativescript-pro-ui/dataform/angular';
import { SnackBar } from "nativescript-snackbar";
import { LoginInput } from '../models/loginInput';
import { RouterExtensions } from 'nativescript-angular/router';

@Component({
  selector: 'app-login',
  moduleId: module.id,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [UserService]
})
export class LoginComponent implements OnInit {

  loading: boolean;
  input: LoginInput;
  @ViewChild('myLoginDataForm') myLoginDataFormComp: RadDataFormComponent;

  constructor(private userService: UserService, private router: RouterExtensions, private globals: GlobalService) {
  }

  ngOnInit() {
      this.loading = false;
      if (ApplicationSettings.getString('account') && ApplicationSettings.getString('token')) {
        this.globals.me = JSON.parse(ApplicationSettings.getString('account'));
        this.router.navigate(["/items"], { clearHistory: true });
      }
      this.input = new LoginInput("", "");
  }
  onLogin() {
    if(!this.myLoginDataFormComp.dataForm.hasValidationErrors()) {
      this.loading = true;
      const userData = {username: this.input.username, password: this.input.password}
      this.userService.loginUser(userData)
          .subscribe(
              (response) => {
                ApplicationSettings.setString('token', response['token']);
                this.globals.me = response['user'];
                this.router.navigate(["/items"], { clearHistory: true });
              },
              (error) => {
                  this.loading = false;
                  new SnackBar().simple("Incorrect Credentials. Please try again.");
              }
          );
  } else {
      (new SnackBar()).simple("All Fields Required!");
  }
  }
}
