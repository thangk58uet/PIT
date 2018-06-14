import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import { SystemManagerService } from './system-manager.service';
import { alert, confirm } from 'devextreme/ui/dialog';
import { PopupAccountComponent } from './popup-account/popup-account.component';
@Component({
  selector: 'app-system-manager',
  templateUrl: './system-manager.component.html',
  styleUrls: ['./system-manager.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SystemManagerComponent implements OnInit {

  listAccount: any = [];
  userName: string = '';
  nickName: string = '';
  passWord: string = '';
  role: string = '';
  popupVisible: boolean = false;
  idModify: string = '';
  @ViewChild(PopupAccountComponent) popupAccountComponent: PopupAccountComponent;
  constructor(private systemManagerService: SystemManagerService) { }

  ngOnInit() {
    this.getListAccount();
  }
  
  getListAccount() {
    this.systemManagerService.getListAccount().subscribe(res => {
      this.listAccount = res;
    })
  }

  editAccountInfo(id) {
    this.popupVisible = true;
    this.idModify = id;
    this.systemManagerService.getAccountDetail(id).subscribe(res => {
      this.userName = res.userName;
      this.nickName = res.nickName;
      this.passWord = res.passWord;
      this.role = res.role;
    })
  }

  deleteAccountInfo(id) {
    let result = confirm('Are you sure?', 'Confirm delete');
    result['done']((dialogResult) => {
      if (dialogResult) {
        this.systemManagerService.deleteAccountDetail(id).subscribe(() => {
          alert('Delete Success!', 'System notice');
          this.getListAccount();
        })
      }
    });
  }

  addAccount() {
    this.popupVisible = true;
    if(this.popupAccountComponent) {
      this.popupAccountComponent.userName = '';
      this.popupAccountComponent.nickName = '';
      this.popupAccountComponent.passWord = '';
      this.popupAccountComponent.role = '';
    }
  }
  reloadTable() {
    this.popupVisible = false;
    this.getListAccount();
  }
}
