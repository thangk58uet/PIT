import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';
import { LoginService } from '../../../../common/service/login.service';
import { DashboardService } from '../dashboard.service';
import { alert } from 'devextreme/ui/dialog';


@Component({
  selector: 'app-dashboard-popup',
  templateUrl: './dashboard-popup.component.html',
  styleUrls: ['./dashboard-popup.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DashboardPopupComponent implements OnInit {

  @Input() idModify = '';
  @Output() isSave = new EventEmitter;
  @Output() isHide = new EventEmitter;
  @Input() partner = '';
  @Input() popupVisible = false;
  @Input() employees = '';
  role = '';
  studentFollow: StudentFollow;
  constructor(private loginService: LoginService,
              private dashboardService: DashboardService) { }

  ngOnInit() {
    this.studentFollow = new StudentFollow();
    this.role = this.loginService.role;
    this.getUserInfo()
  }

  follow() {
    this.studentFollow.partner = this.partner;
    this.studentFollow.id = Math.random();
    this.dashboardService.followPartner(this.studentFollow).subscribe(res => {
      alert('Follow Success','System notice');
      this.isHide.emit();
    })

  }

  getUserInfo() {
    this.dashboardService.getUserInfo(this.loginService.userName).subscribe(res => {
      this.studentFollow.name = res[0].name;
      this.studentFollow.userName = res[0].userName;
      this.studentFollow.mssv = res[0].mssv;
      this.studentFollow.class = res[0].class;
      this.studentFollow.startYear = res[0].startYear;
      this.studentFollow.major = res[0].major;
      this.studentFollow.averagePoint = res[0].averagePoint;
      this.studentFollow.phoneNumber = res[0].phoneNumber;
      this.studentFollow.emailVNU = res[0].emailVNU;
      this.studentFollow.emailPersonal = res[0].emailPersonal;
    })
  }
  cancel() {
    this.isHide.emit();
  }
}

export class StudentFollow {
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
  type: string = 'Thực Tập Với Partner';
  id: any;
}
