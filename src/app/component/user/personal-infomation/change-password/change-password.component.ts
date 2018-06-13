import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { LoginService } from '../../../../common/service/login.service';
import { alert } from 'devextreme/ui/dialog';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ChangePasswordComponent implements OnInit {

  currentPassword: string = '';
  newPassword: string = '';
  confirmNewPassword: string = '';
  changePassword: LoginInfo;
  warningCurrentPassword: boolean = false;
  warningPasswordDontMatch: boolean = false;
  warningFillout: boolean = false;
  constructor(private loginService: LoginService) { }

  ngOnInit() {
    this.changePassword = new LoginInfo();
  }

  getUserInfo() {

  }

  saveUser() {
    if (this.currentPassword !== this.loginService.password) {
      this.warningCurrentPassword = true;
      return;
    }
    else {
      this.warningCurrentPassword = false;
    }
    if (this.newPassword !== this.confirmNewPassword) {
      this.warningPasswordDontMatch = true;
      return;
    }
    else {
      this.warningPasswordDontMatch = false;
    }
    if (this.newPassword === '' || this.confirmNewPassword === '') {
      this.warningFillout = true;
      return;
    }
    else {
      this.warningFillout = false;
    }
    this.changePassword.userName = this.loginService.userName;
    this.changePassword.passWord = this.newPassword;
    this.changePassword.role = this.loginService.role;
    this.changePassword.id = this.loginService.userID;
    if (this.loginService.role === 'student') {
      this.loginService.changePasswordUser(this.changePassword).subscribe(() => {
        alert('Change Password Success!', 'System Notice');
        this.loginService.getAccountUser(this.loginService.userName,this.changePassword.passWord);
      })
    }
  }

  cancel() {
    this.currentPassword = '';
    this.newPassword = '';
    this.confirmNewPassword = '';
    this.warningCurrentPassword = false;
    this.warningPasswordDontMatch = false;
  }

}
export class LoginInfo {
  userName = '';
  passWord = '';
  role = '';
  id: any;

}
