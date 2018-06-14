import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-intership-manager',
  template: '<router-outlet></router-outlet>'
})
export class IntershipManagerComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
    if (this.router.url === '/main/intership-manager') {
      this.router.navigate(['/main/intership-manager/school/']);
    }
  }

}
