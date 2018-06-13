import { Component, OnInit, ViewEncapsulation, Output, EventEmitter } from '@angular/core';
import { alert } from 'devextreme/ui/dialog';
import { LoginService } from '../../../../../common/service/login.service';
import { ListFollowService } from '../list-follow.service';

@Component({
  selector: 'app-inter-at-school',
  templateUrl: './inter-at-school.component.html',
  styleUrls: ['./inter-at-school.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class InterAtSchoolComponent implements OnInit {

  title: string = '';
  lecture: string = '';
  interAtSchool: InterAtSchool;
  listLecture = ['Ma Thị Châu','Nguyễn Thị Minh Châu','Lê Phê Đô','Phạm Ngọc Hùng','Lê Đình Thanh','Nguyễn Đại Thọ','Nguyễn Văn Vinh'];
  @Output() closePopup = new EventEmitter;
  constructor(private loginService: LoginService,
              private listFollowService: ListFollowService) {
    this.lecture = this.listLecture[0];
  }

  ngOnInit() {
    this.interAtSchool = new InterAtSchool();
    this.interAtSchool.student = this.loginService.userName;
  }

  save() {
    this.interAtSchool.title = this.title;
    this.interAtSchool.lecture = this.lecture;
    this.interAtSchool.id = Math.random();
    this.listFollowService.addRequestInterAtSchool(this.interAtSchool).subscribe(res => {
      alert('Send Request Success','System notice');
      this.closePopup.emit();
    })
  }

  cancel() {
    this.closePopup.emit();
  }
}

export class InterAtSchool {
  student: string = '';
  title: string = '';
  lecture: string = '';
  id: any;
}
