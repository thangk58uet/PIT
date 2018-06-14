import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { StudentInfoService } from './student-info.service';

@Component({
  selector: 'app-student-info',
  templateUrl: './student-info.component.html',
  styleUrls: ['./student-info.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class StudentInfoComponent implements OnInit {

  listStudent = [];
  popupVisible = false;
  idModify = '';
  constructor( private studentInfoService: StudentInfoService) { }

  ngOnInit() {
    this.getListStudent();
  }

  getListStudent(){
    this.studentInfoService.getListStudent().subscribe(res => {
      this.listStudent = res;
    })
  }

  editStudentInfo(id) {
    this.idModify = id;
    this.popupVisible = true;
  }

  reloadTable() {
    this.getListStudent();
    this.popupVisible = false;
  }
}
