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
        {path: 'student-info', loadChildren: '../../component/user/student-info/student-info.module#StudentInfoModule'},
        {path: 'intership-manager', loadChildren: '../../component/user/intership-manager/intership-manager.module#IntershipManagerModule'},
        {path: 'system-manager', loadChildren: '../../component/user/system-manager/system-manager.module#SystemManagerModule'}
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
