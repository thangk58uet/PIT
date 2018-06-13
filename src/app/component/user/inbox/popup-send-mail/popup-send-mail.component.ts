import { Component, OnInit, ViewEncapsulation, Input, EventEmitter, Output } from '@angular/core';
import { LoginService } from '../../../../common/service/login.service';
import { alert} from 'devextreme/ui/dialog';
@Component({
  selector: 'app-popup-send-mail',
  templateUrl: './popup-send-mail.component.html',
  styleUrls: ['./popup-send-mail.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PopupSendMailComponent implements OnInit {

  @Input() sender: string = '';
  @Input() receiver: string = '';
  @Input() title: string = '';
  content: string = '';
  mail: Mail;
  @Input() type = '';
  @Output() closePopup = new EventEmitter;
  constructor(private loginService: LoginService) { }

  ngOnInit() {
    this.mail = new Mail();
    this.sender = this.loginService.userName;
    if(this.type === 'reply') {
      this.sender = this.loginService.userName;
      this.title = 'Re: ' + this.title;
    }
  }

  sendMail() {
    this.mail.sender = this.sender;
    this.mail.receiver = this.receiver
    this.mail.title = this.title;
    this.mail.content = this.content;
    this.mail.id = Math.random();
    this.loginService.addMail(this.mail).subscribe(() => {
      alert('Email has been send successfully!','System notice');
      this.closePopup.emit();
    })
  }

  cancel() {
    this.closePopup.emit();
  }
}
export class Mail {
  sender: string = '';
  receiver: string = '';
  title: string = '';
  content: any;
  id: any;
  sendDate = new Date().getDate() + '/' + (new Date().getMonth() + 1) + '/' + new Date().getFullYear();
  seen = 'no';
}
