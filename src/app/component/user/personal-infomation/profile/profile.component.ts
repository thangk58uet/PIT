import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';

import { ProfileService } from './profile.service';
import { alert} from 'devextreme/ui/dialog';
declare const $: any;
import { confirm } from 'devextreme/ui/dialog';
import { DxDataGridComponent } from 'devextreme-angular';
import { LoginService } from '../../../../common/service/login.service';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  encapsulation: ViewEncapsulation.None

})
export class ProfileComponent implements OnInit {

  userInfo: userInfo;
  constructor(
    private profileService: ProfileService,
    private loginService: LoginService) {}


  ngOnInit() {
    this.userInfo = new userInfo();
    this.userInfo.userName = this.loginService.userName;
    this.getUserInfo();
  }

  getUserInfo() {
    this.profileService.getUserInfo(this.loginService.userName).subscribe(res => {
      this.userInfo.emailPersonal = res[0].emailPersonal;
      this.userInfo.skypeID = res[0].skypeID;
      this.userInfo.facebook = res[0].facebook;
      this.userInfo.phoneNumber = res[0].phoneNumber;
      this.userInfo.position = res[0].position;
      this.userInfo.english = res[0].english;
      this.userInfo.certificate = res[0].certificate;
      this.userInfo.exp = res[0].exp;
      this.userInfo.hobby = res[0].hobby;
      this.userInfo.future = res[0].future;
      this.userInfo.note = res[0].note;
      this.userInfo.mssv = res[0].mssv;
      this.userInfo.class = res[0].class;
      this.userInfo.startYear = res[0].startYear;
      this.userInfo.major = res[0].major;
      this.userInfo.address = res[0].address;
      this.userInfo.name = res[0].name;
      this.userInfo.dob = res[0].dob;
      this.userInfo.emailVNU = res[0].emailVNU;
      this.userInfo.averagePoint = res[0].averagePoint;
      this.userInfo.passYear = res[0].passYear;
      this.userInfo.id = res[0].id;
    })
  }

  resetData(){}

  save() {
    this.profileService.editUserInfo(this.userInfo).subscribe(() => {
      alert('Save success','System notice');
      this.getUserInfo();
    })
  }

}

class userInfo {
  userName: string = '';
  emailPersonal: string = '';
  skypeID: string = '';
  facebook: string = '';
  phoneNumber: string = '';
  position: string = '';
  english: string = '';
  certificate: string = '';
  exp: string = '';
  hobby: string = '';
  future: string = '';
  note: string = '';
  mssv: string = '';
  class: string = '';
  startYear: string = '';
  major: string = '';
  address: string = '';
  name: string = '';
  dob: string = '';
  emailVNU: string = '';
  averagePoint: number = null;
  passYear: string = '';
  id: number = null;
}