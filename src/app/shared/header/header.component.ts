import { OnInit, Component, ViewEncapsulation, Input } from '@angular/core';
import { Router } from '@angular/router';
import * as $ from 'jquery';
import { LoginService } from '../../common/service/login.service';
// import { CookieService } from 'ngx-cookie-service';

// import { alert} from 'devextreme/ui/dialog';
@Component({
  selector: 'app-header',
  templateUrl: 'header.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['header.component.css']
})
export class HeaderComponent implements OnInit {
  dateValue: any;
  checkLogout: boolean;
  openLogout: boolean;
  userName = 'Student';
  constructor(private router: Router,
              private loginService: LoginService) {

  }

  ngOnInit(): void {
    document.addEventListener('click', () => {
      $('#container').removeClass('nav-bar-open');
      $('#header').find('.user-menu').removeClass('open');
    });
    this.userName = this.loginService.userName;
  }

  toggleNavBar() {
    $('#container').toggleClass('nav-bar-open');
  }

  toggleUserMenu() {
    $('#header').find('.user-menu').toggleClass('open');
  }

  goToDashboard() {
    this.router.navigate(['/main/dashboard']);
  }

  isOpenNav() {
    const el = $('#container');
    if (el.hasClass('nav-bar-open')) {
      return true;
    }
    return false;
  }

  logout() {
    sessionStorage.clear();
    // this.cookieService.deleteAll();
    this.router.navigate(['/login/']);
    localStorage.clear();
  }

  holdClick(event) {
    event.stopPropagation();
  }
}
