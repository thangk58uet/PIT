import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
@Component({
  selector: 'app-personal-infomation',
  template: '<router-outlet></router-outlet>'
})
export class PersonalInfomationComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
    if (this.router.url === '/main/personal') {
      this.router.navigate(['/main/personal/profile/']);
    }
  }
}
