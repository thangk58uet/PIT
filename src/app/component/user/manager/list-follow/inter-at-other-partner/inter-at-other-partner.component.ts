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
    this.interAtOtherPartner.student = this.loginService.userName;
  }

  save() {
    this.interAtOtherPartner.partnerName = this.partnerName;
    this.interAtOtherPartner.description = this.description;
    this.interAtOtherPartner.id = Math.random();
    this.listFollowService.addRequestInterAtOtherPartner(this.interAtOtherPartner).subscribe(res => {
      alert('Send Request Success','System notice');
      this.closePopup.emit();
    })
  }

}

export class InterAtOtherPartner {
  student: string = '';
  partnerName: string = '';
  description: string = '';
  id: any;
}
