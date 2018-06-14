import { Component, OnInit, EventEmitter, Output, ViewEncapsulation } from '@angular/core';
import { LoginService } from '../../../../common/service/login.service';
import { DashboardService } from '../dashboard.service';
import { alert } from 'devextreme/ui/dialog';
@Component({
  selector: 'app-dashboard-add-new',
  templateUrl: './dashboard-add-new.component.html',
  styleUrls: ['./dashboard-add-new.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DashboardAddNewComponent implements OnInit {

  @Output() closePopup = new EventEmitter;
  addNew: AddNew;
  title: string = '';
  startDate: string = '';
  endDate: string = '';
  content: string = '';
  constructor(private dashboardService: DashboardService,
              private loginService: LoginService) { }

  ngOnInit() {
    this.addNew = new AddNew();
    this.addNew.partner = this.loginService.nickName;
  }

  add() {
    this.addNew.title = this.title;
    this.addNew.startDate = this.startDate;
    this.addNew.endDate = this.endDate;
    this.addNew.content = this.content;
    this.addNew.id = Math.random();
    this.dashboardService.postData(this.addNew).subscribe(res => {
      alert('Add Success','System notice');
      this.closePopup.emit();
    })
  }

  cancel() {
    this.closePopup.emit();
  }
}

export class AddNew {
  title: string = '';
  startDate: string = '';
  endDate: string = '';
  content: string = '';
  partner: string = '';
  id: any;
}
