import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../common/service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class LoginComponent implements OnInit {

  userName: string = '';
  passWord: string = '';
  authenticationError: boolean = false;

  constructor(
    private router: Router,
    private loginService: LoginService
  ) {}

  ngOnInit() {
    this.authenticationError = false;
  }

  login() {
    this.loginService.getAccountUser(this.userName, this.passWord).subscribe(res => {
      if (res.length === 0) {
        this.authenticationError = true;
      }
      else {
        this.authenticationError = false;
        this.loginService.userName = res[0].userName;
        this.loginService.userID = res[0].id;
        this.loginService.password = res[0].passWord;
        this.loginService.role = res[0].role;
        this.loginService.nickName = res[0].nickName;
        this.router.navigate(['/main/dashboard']);
      }
    })
  }
}
