import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';

import { ProfileService } from './profile.service';
import { alert} from 'devextreme/ui/dialog';
declare const $: any;
import { confirm } from 'devextreme/ui/dialog';
import { DxDataGridComponent } from 'devextreme-angular';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  encapsulation: ViewEncapsulation.None

})
export class ProfileComponent implements OnInit {

  school: shoolManagement;
  student: studentManagement;
  constructor(
    private profileService: ProfileService) {}


  ngOnInit() {
    this.school = new shoolManagement();
    this.student = new studentManagement();
    this.getDataShoolManagement();
    this.getDataStudentManagement();
  }

  getDataShoolManagement() {
    this.profileService.getDataShoolManagement().subscribe(res => {
      this.school.mssv = res[0].mssv;
      this.school.class = res[0].class;
      this.school.startYear = res[0].startYear;
      this.school.major = res[0].major;
      this.school.address = res[0].address;
      this.school.name = res[0].name;
      this.school.dob = res[0].dob;
      this.school.emailVNU = res[0].emailVNU;
      this.school.averagePoint = res[0].averagePoint;
      this.school.passYear = res[0].passYear;
    });
  }

  getDataStudentManagement() {
    this.profileService.getDataStudentManagement().subscribe(res => {
      this.student.emailPersonal = res[0].emailPersonal;
      this.student.skypeID = res[0].skypeID;
      this.student.facebook = res[0].facebook;
      this.student.phoneNumber = res[0].phoneNumber;
      this.student.position = res[0].position;
      this.student.english = res[0].english;
      this.student.certificate = res[0].certificate;
      this.student.exp = res[0].exp;
      this.student.hobby = res[0].hobby;
      this.student.future = res[0].future;
      this.student.note = res[0].note;
    })
  }

  resetData() {}

  save() {
    this.student.id = 1;
    this.profileService.editDataStudentManagement(this.student).subscribe(() => {
      alert('Save success', 'System notice');
    })
  }

}

class shoolManagement {
  mssv: string = '';
  class: string = '';
  startYear: string = '';
  major: string = '';
  address: string = '';
  name: string = '';
  dob: string = '';
  emailVNU: string = '';
  averagePoint: number = null;
  passYear: string = '';
  id: number = null;
}
class studentManagement {
  emailPersonal: string = '';
  skypeID: string = '';
  facebook: string = '';
  phoneNumber: string = '';
  position: string = '';
  english: string = '';
  certificate: string = '';
  exp: string = '';
  hobby: string = '';
  future: string = '';
  note: string = '';
  id: number = null;
}
