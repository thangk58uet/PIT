import { Component, OnInit, ViewEncapsulation, EventEmitter, Input, Output } from '@angular/core';
import { StudentInfoService } from '../student-info.service';
import { alert } from 'devextreme/ui/dialog';
import { ProfileService } from '../../personal-infomation/profile/profile.service';
import { LoginService } from '../../../../common/service/login.service';
@Component({
  selector: 'app-popup-student-info',
  templateUrl: './popup-student-info.component.html',
  styleUrls: ['./popup-student-info.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PopupStudentInfoComponent implements OnInit {

  userInfo: UserInfo;
  @Input() idModify = null;
  @Output() closePopup = new EventEmitter;
  constructor(private studentInfoService: StudentInfoService,
    private profileService: ProfileService,
    private loginService: LoginService) { }

  ngOnInit() {
    this.userInfo = new UserInfo();
  }

  ngOnChanges() {
    if (this.idModify) {
      this.studentInfoService.getStudentDetail(this.idModify).subscribe(res => {
        this.userInfo.emailPersonal = res.emailPersonal;
        this.userInfo.skypeID = res.skypeID;
        this.userInfo.facebook = res.facebook;
        this.userInfo.phoneNumber = res.phoneNumber;
        this.userInfo.position = res.position;
        this.userInfo.english = res.english;
        this.userInfo.certificate = res.certificate;
        this.userInfo.exp = res.exp;
        this.userInfo.hobby = res.hobby;
        this.userInfo.future = res.future;
        this.userInfo.note = res.note;
        this.userInfo.mssv = res.mssv;
        this.userInfo.class = res.class;
        this.userInfo.startYear = res.startYear;
        this.userInfo.major = res.major;
        this.userInfo.address = res.address;
        this.userInfo.name = res.name;
        this.userInfo.dob = res.dob;
        this.userInfo.emailVNU = res.emailVNU;
        this.userInfo.averagePoint = res.averagePoint;
        this.userInfo.passYear = res.passYear;
        this.userInfo.userName = this.userInfo.emailVNU;
      })
    }
  }

  cancel() {
    this.closePopup.emit();
  }

  save() {
    this.userInfo.id = this.idModify;
    this.studentInfoService.editStudentDetail(this.userInfo).subscribe(() => {
      alert('Save success!', 'System notice');
      this.closePopup.emit();
    })
  }

  resetData() { }
}

class UserInfo {
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