import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';
import { LoginService } from '../../../../common/service/login.service';



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
  constructor(private loginService: LoginService) { }

  ngOnInit() {
    this.role = this.loginService.role;
  }

  follow() {

  }

  cancel() {
    this.isHide.emit();
  }
}

export class StudentFollow {
  name = "Nguyễn Huy Thắng";
  mssv = "13020403";
  classMH = "K58CB";

}
