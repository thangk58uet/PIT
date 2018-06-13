import { Component, OnInit, ViewEncapsulation, EventEmitter, Output } from '@angular/core';
import { alert} from 'devextreme/ui/dialog';
import { LoginService } from '../../../../common/service/login.service';
import { ReportService } from '../report.service';

@Component({
  selector: 'app-popup-report',
  templateUrl: './popup-report.component.html',
  styleUrls: ['./popup-report.component.scss'],
  encapsulation: ViewEncapsulation.None

})
export class PopupReportComponent implements OnInit {

  sender: string = '';
  receiver: string = '';
  title: string = '';
  content: any;
  report: Report;
  @Output() closePopup = new EventEmitter;
  constructor(private loginService: LoginService,
              private reportService: ReportService) { }

  ngOnInit() {
    this.report = new Report();
    this.sender = this.loginService.userName;
    this.title = '[Báo cáo]: ' + this.title;
  }

  sendReport(){
    this.report.title = this.title;
    this.report.content = this.content;
    this.report.receiver = this.receiver;
    this.report.sender = this.sender;
    this.report.sendDate = new Date().getDate() + '/' + (new Date().getMonth() + 1) + '/' + new Date().getFullYear();
    this.report.id = Math.random();
    this.reportService.addReport(this.report).subscribe(res => {
      alert('Send Report Success!','System notice');
      this.closePopup.emit();
    })
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
