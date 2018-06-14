import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { StudentInfoComponent } from './student-info.component';
import { HttpModule } from '@angular/http';
import { DxButtonModule, DxDataGridModule, DxDateBoxModule, DxLookupModule, DxPopupModule, DxSelectBoxModule, DxTemplateModule, DevExtremeModule } from 'devextreme-angular';
import { StudentInfoService } from './student-info.service';
import { PopupStudentInfoComponent } from './popup-student-info/popup-student-info.component';
import { ProfileService } from '../personal-infomation/profile/profile.service';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    RouterModule.forChild([{
      path: '',
      component: StudentInfoComponent,
      children: [
        {path: 'student', component: StudentInfoComponent},
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
  declarations: [StudentInfoComponent, PopupStudentInfoComponent],
  providers: [StudentInfoService,ProfileService]
})
export class StudentInfoModule { }
