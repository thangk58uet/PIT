import { Component, OnInit, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import { SystemManagerService } from '../system-manager.service';
import { alert } from 'devextreme/ui/dialog';

@Component({
  selector: 'app-popup-account',
  templateUrl: './popup-account.component.html',
  styleUrls: ['./popup-account.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PopupAccountComponent implements OnInit {

  accountUser: AccountUser;
  @Input() idModify = '';
  @Output() closePopup = new EventEmitter;
  @Input() userName: string = '';
  @Input() nickName: string = '';
  @Input() passWord: string = '';
  @Input() role: string = '';
  listRole = ['admin','lecture','partner','student'];
  constructor(private systemManagerService: SystemManagerService) { }

  ngOnInit() {
    this.accountUser = new AccountUser;
  }

  save() {
    this.accountUser.userName = this.userName;
    this.accountUser.nickName = this.nickName;
    this.accountUser.passWord = this.passWord;
    this.accountUser.role = this.role;
    this.accountUser.id = this.idModify;
    this.systemManagerService.editAccountDetail(this.accountUser).subscribe(res => {
      alert('Save success!', 'System notice');
      this.closePopup.emit();
    })
  }
}

export class AccountUser {
  userName: string = '';
  nickName: string = '';
  passWord: string = '';
  role: string = '';
  id: any;
}