import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';
import { NavComponent } from '../nav/nav.component';
import { HeaderComponent } from '../header/header.component';
import { CommonModule } from '@angular/common';
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([{
      path: '',
      component: LayoutComponent,
      children: [
        {path: 'dashboard', loadChildren: '../../component/user/dashboard/dashboard.module#DashboardModule'},
        {path: 'personal', loadChildren: '../../component/user/personal-infomation/personal-infomation.module#PersonalInfomationModule'},
        {path: 'inbox', loadChildren: '../../component/user/inbox/inbox.module#InboxModule'},
        {path: 'report', loadChildren: '../../component/user/report/report.module#ReportModule'},
        {path: 'manager', loadChildren: '../../component/user/manager/manager.module#ManagerModule'},
        {path: 'student', loadChildren: '../../component/user/student-info/student-info.module#StudentInfoModule'}
      ]
    }])
  ],
  declarations: [
    LayoutComponent,
    NavComponent,
    HeaderComponent
  ],
  providers: []
})
export class LayoutModule {
}
