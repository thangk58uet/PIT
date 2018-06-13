import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import {LoginService} from '../../../common/service/login.service';
import { confirm } from 'devextreme/ui/dialog';
declare const $: any;
import { DxDataGridModule, DxButtonModule, DxLookupModule } from 'devextreme-angular';
import { alert} from 'devextreme/ui/dialog';
import { PopupSendMailComponent } from './popup-send-mail/popup-send-mail.component';

@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class InboxComponent implements OnInit {

  sender: string = '';
  receiver: string = '';
  title: string = '';
  content: string = '';
  listMail: any = [];
  popupVisible: boolean = false;
  popupVisibleCreatMail: boolean = false;
  mailDetail: any = {};
  replyReceive = '';
  idModify = '';
  titleDetailMail = '';
  senderDetailMail = '';
  contentDetailMail = '';
  @ViewChild(PopupSendMailComponent) popupSendMailComponent: PopupSendMailComponent;
  constructor(private  loginService: LoginService) {}

  ngOnInit() {
    this.mailDetail = new Mail();
    this.sender = this.loginService.userName;
    this.getListMail();
  }

  getListMail() {
    this.loginService.getListMail(this.loginService.userName).subscribe(res => {
      if(res.length > 0) {
        this.listMail = res;
      }
    })
  }

  showDetailMail(id) {
    this.popupVisible = true;
    this.idModify = id;
    this.loginService.getMailDetail(id).subscribe(res => {
      this.mailDetail.sender = res.sender;
      this.mailDetail.receiver = res.receiver;
      this.mailDetail.title = res.title;
      this.mailDetail.content = res.content;
      this.mailDetail.id = res.id;
      this.mailDetail.sendDate = res.sendDate;
      this.replyReceive = res.sender;
      this.titleDetailMail = res.title;
      this.senderDetailMail = res.sender;
      this.contentDetailMail = res.content;
    });

  }

  hidePopup() {
    this.popupVisibleCreatMail = false;
  }

  closePopup() {
    this.popupVisible = false;
    this.mailDetail.seen = 'yes';
    console.log(this.mailDetail);
    this.loginService.editMailDetail(this.mailDetail).subscribe(() => {
      this.getListMail();
    });
  }
  creatMail() {
    this.popupVisibleCreatMail = true;
    if(this.popupSendMailComponent) {
      this.popupSendMailComponent.receiver = '';
    this.popupSendMailComponent.title = '';
    this.popupSendMailComponent.content = '';
    }
  }
}

export class Mail {
  sender: string = '';
  receiver: string = '';
  title: string = '';
  content: any;
  id: any;
  sendDate = '';
  seen = 'no';
}

