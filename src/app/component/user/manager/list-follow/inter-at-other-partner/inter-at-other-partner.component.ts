import { Component, OnInit, EventEmitter, Output, ViewEncapsulation } from '@angular/core';
import { alert } from 'devextreme/ui/dialog';
import { LoginService } from '../../../../../common/service/login.service';
import { ListFollowService } from '../list-follow.service';

@Component({
  selector: 'app-inter-at-other-partner',
  templateUrl: './inter-at-other-partner.component.html',
  styleUrls: ['./inter-at-other-partner.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class InterAtOtherPartnerComponent implements OnInit {

  partnerName: string = '';
  description: string = '';
  interAtOtherPartner: InterAtOtherPartner;
  @Output() closePopup = new EventEmitter;
  constructor(private loginService: LoginService,
              private listFollowService: ListFollowService) { }

  ngOnInit() {
    this.interAtOtherPartner = new InterAtOtherPartner();
    this.interAtOtherPartner.userName = this.loginService.userName;
    this.getUserInfo();
  }

  getUserInfo() {
    this.listFollowService.getUserInfo(this.loginService.userName).subscribe(res => {
      this.interAtOtherPartner.name = res[0].name;
      this.interAtOtherPartner.userName = res[0].userName;
      this.interAtOtherPartner.mssv = res[0].mssv;
      this.interAtOtherPartner.class = res[0].class;
      this.interAtOtherPartner.startYear = res[0].startYear;
      this.interAtOtherPartner.major = res[0].major;
      this.interAtOtherPartner.averagePoint = res[0].averagePoint;
      this.interAtOtherPartner.phoneNumber = res[0].phoneNumber;
      this.interAtOtherPartner.emailVNU = res[0].emailVNU;
      this.interAtOtherPartner.emailPersonal = res[0].emailPersonal;
    })
  }

  save() {
    this.interAtOtherPartner.partner = this.partnerName;
    this.interAtOtherPartner.id = Math.random();
    this.listFollowService.addRequestInterAtOtherPartner(this.interAtOtherPartner).subscribe(res => {
      alert('Send Request Success','System notice');
      this.closePopup.emit();
    })
  }

}

export class InterAtOtherPartner {
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
  type: string = 'Thực Tập Tại Công Ty Khác';
  id: any;
}
