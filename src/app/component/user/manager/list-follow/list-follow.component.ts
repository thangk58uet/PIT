import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import { LoginService } from '../../../../common/service/login.service';
import { ListFollowService } from './list-follow.service';
import { InterAtSchoolComponent } from './inter-at-school/inter-at-school.component';
import { InterAtOtherPartnerComponent } from './inter-at-other-partner/inter-at-other-partner.component';
import { alert,confirm } from 'devextreme/ui/dialog';
@Component({
  selector: 'app-list-follow',
  templateUrl: './list-follow.component.html',
  styleUrls: ['./list-follow.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ListFollowComponent implements OnInit {

  role: string = '';
  listFollow: any = [];
  popupVisibleSchool: boolean = false;
  popupVisibleOtherPartner: boolean = false;
  listStatus = ['pending','success','reject'];
  studentFollowInfo: any = {};
  @ViewChild(InterAtSchoolComponent) interAtSchoolComponent: InterAtSchoolComponent;
  @ViewChild(InterAtOtherPartnerComponent) interAtOtherPartnerComponent: InterAtOtherPartnerComponent;
  constructor(private loginService: LoginService,
              private listFollowService: ListFollowService) {}

  ngOnInit() {
    this.role = this.loginService.role;
    this.getListFollow();
  }

  getListFollow() {
    if(this.role === 'student') {
      this.listFollowService.getListStudentFollow(this.loginService.userName).subscribe(res => {
        this.listFollow = res;
      })
    }
    else if(this.role === 'partner') {
      this.listFollowService.getListPartnerFollow(this.loginService.nickName).subscribe(res => {
        this.listFollow = res;
      })
    }
  }

  interAtSchool() {
    this.popupVisibleSchool = true;
    if(this.interAtSchoolComponent) {
      this.interAtSchoolComponent.title = '';
      this.interAtSchoolComponent.lecture = this.interAtSchoolComponent.listLecture[0];
    }
  }

  closePopupSchool() {
    this.popupVisibleSchool = false;
    this.getListFollow();
  }

  interAtOtherPartner() {
    this.popupVisibleOtherPartner = true;
    if(this.interAtOtherPartnerComponent) {
      this.interAtOtherPartnerComponent.partnerName = '';
      this.interAtOtherPartnerComponent.description = '';
    }
  }

  closePopupOtherPartner() {
    this.popupVisibleOtherPartner = false;
    this.getListFollow();
  }

  getStudentFollowInfo(id) {
    this.listFollowService.getStudentFollowInfo(id).subscribe(res => {
      this.studentFollowInfo.partner = res.partner;
      this.studentFollowInfo.name = res.name;
      this.studentFollowInfo.userName = res.userName;
      this.studentFollowInfo.mssv = res.mssv;
      this.studentFollowInfo.class = res.class;
      this.studentFollowInfo.startYear = res.startYear;
      this.studentFollowInfo.major = res.major;
      this.studentFollowInfo.averagePoint = res.averagePoint;
      this.studentFollowInfo.phoneNumber = res.phoneNumber;
      this.studentFollowInfo.emailVNU = res.emailVNU;
      this.studentFollowInfo.emailPersonal = res.emailPersonal;
      this.studentFollowInfo.lecture = res.lecture;
      this.studentFollowInfo.type = res.type;
    })
  }

  changeStatus(status,id) {
    this.getStudentFollowInfo(id);
    let result = confirm('Are you sure?', 'Confirm delete');
    result['done']((dialogResult) => {
      if (dialogResult) {
        this.studentFollowInfo.status = status;
        this.studentFollowInfo.id = id;
        this.listFollowService.changeStatusStudentFollow(this.studentFollowInfo).subscribe(() => {
          alert('Change Success!', 'System notice');
          this.getListFollow();
        })
      }
    });
  }

}
