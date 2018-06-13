import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { DxButtonModule, DxDataGridModule, DxDateBoxModule, DxLookupModule, DxPopupModule, DxSelectBoxModule, DxTemplateModule, DevExtremeModule } from 'devextreme-angular';
import { HttpModule } from '@angular/http';
import { ManagerComponent } from './manager.component';
import { ListFollowComponent } from './list-follow/list-follow.component';
import { ListFollowService } from './list-follow/list-follow.service';
import { InterAtSchoolComponent } from './list-follow/inter-at-school/inter-at-school.component';
import { InterAtOtherPartnerComponent } from './list-follow/inter-at-other-partner/inter-at-other-partner.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    RouterModule.forChild([{
      path: '',
      component: ManagerComponent,
      children: [
        {path: 'follow', component: ListFollowComponent},
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
  declarations: [ManagerComponent, ListFollowComponent,InterAtSchoolComponent,InterAtOtherPartnerComponent],
  providers: [ListFollowService]
})
export class ManagerModule { }
