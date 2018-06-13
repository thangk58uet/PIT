import { Component, OnInit, EventEmitter, Output, Input, ViewEncapsulation, ViewChild } from '@angular/core';
import { PopupSendMailComponent } from '../popup-send-mail/popup-send-mail.component';

@Component({
  selector: 'app-popup-inbox',
  templateUrl: './popup-inbox.component.html',
  styleUrls: ['./popup-inbox.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PopupInboxComponent implements OnInit {

  @Input() idModify = '';
  @Input() sender = '';
  @Input() content = '';
  @Output() closePopup = new EventEmitter;
  @Input() title = '';
  popupvisibleReply: boolean = false;
  @ViewChild(PopupSendMailComponent) popupSendMailComponent: PopupSendMailComponent
  constructor() { }

  ngOnInit() {

  }

  reply() {
    this.popupvisibleReply = true;
    if(this.popupSendMailComponent) {
      this.popupSendMailComponent.content = '';
    }
  }

  hidePopup() {
    this.popupvisibleReply = false;
  }

  close() {
    this.closePopup.emit();
  }
}
