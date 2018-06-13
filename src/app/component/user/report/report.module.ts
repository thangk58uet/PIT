import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ReportComponent } from './report.component';
import { HttpModule } from '@angular/http';
import { DxButtonModule, DxDataGridModule, DxDateBoxModule, DxLookupModule, DxPopupModule, DxSelectBoxModule, DxTemplateModule, DevExtremeModule } from 'devextreme-angular';
import { PopupReportComponent } from './popup-report/popup-report.component';
import { PopupReportDetailComponent } from './popup-report-detail/popup-report-detail.component';
import { ReportService } from './report.service';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    RouterModule.forChild([{
      path: '',
      component: ReportComponent,
      children: [
        {path: 'report', component: ReportComponent},
      ]
    }]),
    DxButtonModule,
    DxDataGridModule,
    DxSelectBoxModule,
    DxDateBoxModule,
    DxPopupModule,
    DxTemplateModule,
    DxLookupModule,
    DevExtremeModule,
  ],
  declarations: [ReportComponent, PopupReportComponent, PopupReportDetailComponent],
  providers: [ReportService]
})
export class ReportModule { }
