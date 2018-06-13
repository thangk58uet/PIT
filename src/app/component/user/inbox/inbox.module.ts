import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { InboxComponent } from './inbox.component';
import { HttpModule } from '@angular/http';
import { DxButtonModule, DxDataGridModule, DxDateBoxModule, DxLookupModule, DxPopupModule, DxSelectBoxModule, DxTemplateModule, DevExtremeModule } from 'devextreme-angular';
import { PopupInboxComponent } from './popup-inbox/popup-inbox.component';
import { PopupSendMailComponent } from './popup-send-mail/popup-send-mail.component';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    RouterModule.forChild([{
      path: '',
      component: InboxComponent,
      children: [
        {path: 'inbox', component: InboxComponent},
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
  declarations: [InboxComponent, PopupInboxComponent, PopupSendMailComponent]
})
export class InboxModule { }
