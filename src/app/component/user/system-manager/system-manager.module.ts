import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { SystemManagerComponent } from './system-manager.component';
import { DxButtonModule, DxDataGridModule, DxDateBoxModule, DxLookupModule, DxPopupModule, DxSelectBoxModule, DxTemplateModule, DevExtremeModule } from 'devextreme-angular';
import { SystemManagerService } from './system-manager.service';
import { PopupAccountComponent } from './popup-account/popup-account.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    RouterModule.forChild([{
      path: '',
      component: SystemManagerComponent,
      children: [
        {path: 'system-manager', component: SystemManagerComponent},
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
  declarations: [SystemManagerComponent, PopupAccountComponent],
  providers: [SystemManagerService]
})
export class SystemManagerModule { }
