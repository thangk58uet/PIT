import { Component, OnInit, ViewEncapsulation, Output, EventEmitter } from '@angular/core';
import { alert } from 'devextreme/ui/dialog';
import { LoginService } from '../../../../../common/service/login.service';
import { ListFollowService } from '../list-follow.service';

@Component({
  selector: 'app-inter-at-school',
  templateUrl: './inter-at-school.component.html',
  styleUrls: ['./inter-at-school.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class InterAtSchoolComponent implements OnInit {

  title: string = '';
  lecture: string = '';
  interAtSchool: InterAtSchool;
  listLecture = ['Ma Thị Châu','Nguyễn Thị Minh Châu','Lê Phê Đô','Phạm Ngọc Hùng','Lê Đình Thanh','Nguyễn Đại Thọ','Nguyễn Văn Vinh'];
  @Output() closePopup = new EventEmitter;
  constructor(private loginService: LoginService,
              private listFollowService: ListFollowService) {
    this.lecture = this.listLecture[0];
  }

  ngOnInit() {
    this.interAtSchool = new InterAtSchool();
    this.interAtSchool.userName = this.loginService.userName;
    this.getUserInfo();
  }

  getUserInfo() {
    this.listFollowService.getUserInfo(this.loginService.userName).subscribe(res => {
      this.interAtSchool.name = res[0].name;
      this.interAtSchool.userName = res[0].userName;
      this.interAtSchool.mssv = res[0].mssv;
      this.interAtSchool.class = res[0].class;
      this.interAtSchool.startYear = res[0].startYear;
      this.interAtSchool.major = res[0].major;
      this.interAtSchool.averagePoint = res[0].averagePoint;
      this.interAtSchool.phoneNumber = res[0].phoneNumber;
      this.interAtSchool.emailVNU = res[0].emailVNU;
      this.interAtSchool.emailPersonal = res[0].emailPersonal;
    })
  }

  save() {
    this.interAtSchool.partner = '';
    this.interAtSchool.lecture = this.lecture;
    this.interAtSchool.id = Math.random();
    this.listFollowService.addRequestInterAtSchool(this.interAtSchool).subscribe(res => {
      alert('Send Request Success','System notice');
      this.closePopup.emit();
    })
  }

  cancel() {
    this.closePopup.emit();
  }
}

export class InterAtSchool {
  partner: string = '';
  name: string = '';
  userName: string = '';
  mssv: string = '';
  class: string = '';
  startYear: string = '';
  major: string = '';
  averagePoint: number = null;
  phoneNumber: string = '';
  emailVNU: string = '';
  emailPersonal: string = '';
  lecture: string = '';
  status: string = 'pending';
  type: string = 'Nghiên Cứu Khoa Học';
  id: any;
}
