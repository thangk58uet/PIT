
import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import { confirm } from 'devextreme/ui/dialog';
declare const $: any;
import { DxDataGridModule, DxButtonModule, DxLookupModule } from 'devextreme-angular';
import { alert} from 'devextreme/ui/dialog';
import { PopupReportComponent } from './popup-report/popup-report.component';
import { LoginService } from '../../../common/service/login.service';
import { ReportService } from './report.service';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ReportComponent implements OnInit {

  listReport: any = [];
  reportDetail: any = {};
  popupVisibleReport = false;
  popupVisibleDetailReport = false;
  senderDetail: string = '';
  receiverDetail: string = '';
  titleDetail: string = ''
  contentDetail: string = '';
  idModify: string = '';
  sendDateDetail: string = '';
  pointDetail: number = 0;
  @ViewChild(PopupReportComponent) popupReportComponent: PopupReportComponent;
  constructor(private  loginService: LoginService,
              private reportService: ReportService) {}

  ngOnInit() {
    this.getListReport();
  }

  getListReport() {
    this.reportService.getlistReport(this.loginService.userName).subscribe(res => {
      this.listReport = res;
    })
  }

  createReport() {
    this.popupVisibleReport = true;
    if(this.popupReportComponent) {
      this.popupReportComponent.receiver = '';
      this.popupReportComponent.title = '[Báo cáo]: ';
      this.popupReportComponent.content = '';
    }
  }

  reloadTable() {
    this.popupVisibleReport = false;
    this.getListReport();
  }

  reloadSetPoint() {
    this.popupVisibleDetailReport = false;
    this.getListReport();
  }

  showDetailReport(id) {
    this.popupVisibleDetailReport = true;
    this.idModify = id;
    this.reportService.getReportDetail(id).subscribe(res => {
      this.senderDetail = res.sender;
      this.receiverDetail = res.receiver;
      this.titleDetail = res.title;
      this.contentDetail = res.content;
      this.sendDateDetail = res.sendDate;
      this.pointDetail = res.point;
      if(this.pointDetail === null) this.pointDetail = 0;
    })
  }
}
