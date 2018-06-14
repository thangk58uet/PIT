
import { group } from '@angular/animations/src/animation_metadata';
import { NgModule, Component, enableProdMode, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { DxDataGridModule, DxButtonModule, DxLookupModule } from 'devextreme-angular';
declare const $: any;
import { confirm } from 'devextreme/ui/dialog';
import { alert} from 'devextreme/ui/dialog';
import { DashboardService } from './dashboard.service';
import { LoginService } from '../../../common/service/login.service';
import { DashboardAddNewComponent } from './dashboard-add-new/dashboard-add-new.component';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DashboardComponent implements OnInit {

  employees = [];
  popupVisible = false;
  idModify = '';
  partner = '';
  contentArray = '';
  role: string = '';
  popupVisibleAddNew: boolean = false;
  @ViewChild(DashboardAddNewComponent) dashboardAddNewComponent: DashboardAddNewComponent;
  constructor(private dashboardService: DashboardService,
              private loginService: LoginService) {
  }
  ngOnInit() {
    this.role = this.loginService.role;
    this.getData();
    console.log(this.role)
  }

  getData(){
    if(this.role === 'partner') {
      this.dashboardService.getDataPartner(this.loginService.nickName).subscribe(res => {
        this.employees = res;
      })
    }
    else {
      this.dashboardService.getData().subscribe(res => {
        this.employees = res;
      })
    }
  }

  showDetailMail(id) {
    this.popupVisible = true;
    this.dashboardService.getDataById(id).subscribe(res => {
      this.contentArray = res.content;
      this.partner = res.partner;
    })
  }

  delete(id) {
    this.dashboardService.deleteData(id).subscribe(() => {
    })
    this.getData();
  }

  addNew() {
    this.popupVisibleAddNew = true;
  }

  hidePopup() {
    this.popupVisible = false;
  }
  reloadTable() {
    this.popupVisibleAddNew = false;
    if(this.dashboardAddNewComponent) {
      this.dashboardAddNewComponent.title = '';
      this.dashboardAddNewComponent.startDate = '';
      this.dashboardAddNewComponent.endDate = '';
      this.dashboardAddNewComponent.content = '';
    }
    this.getData();
  }

  editPoster(id) {
    this.popupVisible = true;
  }
}
