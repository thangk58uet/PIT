import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { DxButtonModule, DxDataGridModule, DxDateBoxModule, DxLookupModule, DxPopupModule, DxSelectBoxModule, DxTemplateModule, DevExtremeModule } from 'devextreme-angular';
import { DashboardService } from './dashboard.service';
import { HttpModule } from '@angular/http';
import { DashboardPopupComponent } from './dashboard-popup/dashboard-popup.component';
import { DashboardAddNewComponent } from './dashboard-add-new/dashboard-add-new.component';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    RouterModule.forChild([{
      path: '',
      component: DashboardComponent,
      children: [
        {path: 'dashboard', component: DashboardComponent},
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
  declarations: [
    DashboardComponent,
    DashboardPopupComponent,
    DashboardAddNewComponent
  ],
  providers: [DashboardService]
})
export class DashboardModule { }
