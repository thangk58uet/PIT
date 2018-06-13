import { Component, OnInit, Input, ViewEncapsulation, EventEmitter, Output } from '@angular/core';

import { alert} from 'devextreme/ui/dialog';
import { LoginService } from '../../../../common/service/login.service';
import { ReportService } from '../report.service';

@Component({
  selector: 'app-popup-report-detail',
  templateUrl: './popup-report-detail.component.html',
  styleUrls: ['./popup-report-detail.component.scss']
})
export class PopupReportDetailComponent implements OnInit {

  @Input() sender: string = '';
  @Input() receiver: string = '';
  @Input() title: string = '';
  @Input() content: string = '';
  @Input() idModify: string = '';
  @Input() sendDate: string = '';
  @Output() closePopup = new EventEmitter;
  reportDetail: Report;
  @Input() point: number = 0;
  listPoint = [0,1,2,3,4,5,6,7,8,9,10];
  constructor(private loginService: LoginService,
              private reportService: ReportService) { }

  ngOnInit() {
    this.reportDetail = new Report();
  }

  save() {
    this.reportDetail.sender = this.sender;
    this.reportDetail.receiver = this.receiver;
    this.reportDetail.sendDate = this.sendDate;
    this.reportDetail.title = this.title;
    this.reportDetail.content = this.content;
    this.reportDetail.id = this.idModify;
    this.reportDetail.point = this.point;
    this.reportService.setPointReport(this.reportDetail).subscribe(res => {
      alert("Successfully!","System notice");
      this.closePopup.emit();
    })
  }

  cancel() {
    this.closePopup.emit();
  }
}

export class Report {
  sender: string = '';
  receiver: string = '';
  sendDate: string = '';
  title: string = '';
  point: number = null;
  content: any;
  id: any;
}

