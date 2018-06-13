import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { PersonalInfomationComponent } from './personal-infomation.component';
import { ProfileService } from './profile/profile.service';
import { Http } from '@angular/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([{
      path: '',
      component: PersonalInfomationComponent,
      children: [
        {path: 'profile', component: ProfileComponent},
        {path: 'change-password', component: ChangePasswordComponent},
      ]
    }])
  ],
  declarations: [
    ProfileComponent,
    ChangePasswordComponent,
    PersonalInfomationComponent
  ],
  providers: [
    ProfileService
  ]
})
export class PersonalInfomationModule { }
