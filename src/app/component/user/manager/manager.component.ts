import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
@Component({
  selector: 'app-manager',
  template: '<router-outlet></router-outlet>'
})
export class ManagerComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
    if (this.router.url === '/main/manager') {
      this.router.navigate(['/main/manager/follow/']);
    }
  }

}
