import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Http } from '@angular/http';
import { IntershipManagerComponent } from './intership-manager.component';
import { SchoolComponent } from './school/school.component';
import { PartnerComponent } from './partner/partner.component';
import { OtherCompanyComponent } from './other-company/other-company.component';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([{
      path: '',
      component: IntershipManagerComponent,
      children: [
        {path: 'school', component: SchoolComponent},
        {path: 'partner', component: PartnerComponent},
        {path: 'other-company', component: OtherCompanyComponent}
      ]
    }])
  ],
  declarations: [IntershipManagerComponent,SchoolComponent,PartnerComponent,OtherCompanyComponent]
})
export class IntershipManagerModule { }
