import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import { LoginService } from '../../../../common/service/login.service';
import { ListFollowService } from './list-follow.service';
import { InterAtSchoolComponent } from './inter-at-school/inter-at-school.component';
import { InterAtOtherPartnerComponent } from './inter-at-other-partner/inter-at-other-partner.component';

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
      this.listFollowService.getListPartnerFollow(this.loginService.userName).subscribe(res => {
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

  }


}
