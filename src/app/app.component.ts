// import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import {Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {
  title = 'Hệ Thống Quản Lý Thực Tập';
  constructor (private router: Router) {}

  ngOnInit() {
    this.router.navigate(['/login']);
  }
  //   if (this.cookieService.get('userName')) {
  //     if (!localStorage.getItem("currentUrl")) {
  //       this.router.navigate(['/main/approvalStatus']);
  //       localStorage.setItem("currentUrl", '/main/approvalStatus');
  //     } else {
  //       this.router.navigate([localStorage.getItem("currentUrl")]);
  //     }
  //   } else {
  //     this.router.navigate(['/login']);
  //   }

  //   setInterval(() => {
  //     if (!this.cookieService.get('userName')) {
  //       sessionStorage.clear();
  //       this.cookieService.deleteAll();
  //       this.router.navigate(['/login/']);
  //       localStorage.clear();
  //     }
  //   }, 5000);
  // }
}
