import { OnInit, Component, ViewEncapsulation } from '@angular/core';
import { NavigationEnd } from '@angular/router';
import { Router } from '@angular/router';
import * as $ from 'jquery';
import { LoginService } from '../../common/service/login.service';
@Component({
  selector: 'app-nav',
  templateUrl: 'nav.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['nav.component.css']
})
export class NavComponent implements OnInit {
  listMenu: any = [];
  currentIndex = 0;
  parentIndex = 0;
  isFullMenu = true;
  parrentSecondIndex = 0;
  constructor(private router: Router,
              private loginService: LoginService) {
    router.events.subscribe((val) => {
      if (val instanceof NavigationEnd) {
        this.checkActive();
        if (!this.isFullMenu) {
          if (!$('#container').hasClass('icon-left-menu')) {
            $('#container').toggleClass('icon-left-menu');
          }
        } else {
          if ($('#container').hasClass('icon-left-menu')) {
            $('#container').removeClass('icon-left-menu');
          }
        }
      }
    });

  }

  ngOnInit(): void {
    if(this.loginService.role === 'student') {
      this.listMenu = [
        {
          url: 'main/dashboard',
          icon: 'fa fa-tachometer',
          isSecond: false,
          hasChild: true,
          child: [],
          group: 1,
          text: 'Dashboard'
        },
        {
          url: 'main/personal',
          icon: 'fa fa-address-card-o',
          isSecond: false,
          hasChild: true,
          child: [
            {
              url: 'main/personal/profile',
              icon: 'fa fa-circle',
              isSecond: true,
              hasChild: false,
              group: 2,
              text: 'Profile'
            },
            {
              url: 'main/personal/change-password',
              icon: 'fa fa-circle',
              isSecond: true,
              hasChild: false,
              group: 2,
              text: 'Change Password'
            }
          ],
          group: 2,
          text: 'Personal Information'
        },
        {
          url: 'main/manager',
          icon: 'fa fa-cogs',
          isSecond: false,
          hasChild: true,
          child: [
            {
              url: 'main/manager/follow',
              icon: 'fa fa-circle',
              isSecond: true,
              hasChild: false,
              group: 3,
              text: 'List Follow'
            },
            {
              url: 'main/manager/other',
              icon: 'fa fa-circle',
              isSecond: true,
              hasChild: false,
              group: 3,
              text: 'Other'
            }
          ],
          group: 3,
          text: 'Manager'
        },
        {
          url: 'main/inbox',
          icon: 'fa fa-envelope-o',
          isSecond: false,
          hasChild: true,
          child: [],
          group: 4,
          text: 'Inbox'
        },
        {
          url: 'main/report',
          icon: 'fa fa-file-text-o',
          isSecond: false,
          hasChild: true,
          child: [],
          group: 4,
          text: 'Report'
        },
      ]
    }
    else if(this.loginService.role === 'partner') {
      this.listMenu = [
        {
          url: 'main/dashboard',
          icon: 'fa fa-tachometer',
          isSecond: false,
          hasChild: true,
          child: [],
          group: 1,
          text: 'Dashboard'
        },
        {
          url: 'main/personal',
          icon: 'fa fa-address-card-o',
          isSecond: false,
          hasChild: true,
          child: [
            {
              url: 'main/personal/profile',
              icon: 'fa fa-circle',
              isSecond: true,
              hasChild: false,
              group: 2,
              text: 'Profile'
            },
            {
              url: 'main/personal/change-password',
              icon: 'fa fa-circle',
              isSecond: true,
              hasChild: false,
              group: 2,
              text: 'Change Password'
            }
          ],
          group: 2,
          text: 'Personal Information'
        },
        {
          url: 'main/inbox',
          icon: 'fa fa-envelope-o',
          isSecond: false,
          hasChild: true,
          child: [],
          group: 4,
          text: 'Inbox'
        },
        {
          url: 'main/report',
          icon: 'fa fa-file-text-o',
          isSecond: false,
          hasChild: true,
          child: [],
          group: 4,
          text: 'Report'
        },
      ]
    }
    else if(this.loginService.role === 'admin') {
      this.listMenu = [
        {
          url: 'main/dashboard',
          icon: 'fa fa-tachometer',
          isSecond: false,
          hasChild: true,
          child: [],
          group: 1,
          text: 'Dashboard'
        },
        {
          url: 'main/personal',
          icon: 'fa fa-address-card-o',
          isSecond: false,
          hasChild: true,
          child: [
            {
              url: 'main/personal/profile',
              icon: 'fa fa-circle',
              isSecond: true,
              hasChild: false,
              group: 2,
              text: 'Profile'
            },
            {
              url: 'main/personal/change-password',
              icon: 'fa fa-circle',
              isSecond: true,
              hasChild: false,
              group: 2,
              text: 'Change Password'
            }
          ],
          group: 2,
          text: 'Personal Information'
        },
        {
          url: 'main/student-info',
          icon: 'fa fa-address-card-o',
          isSecond: false,
          hasChild: true,
          child: [],
          group: 3,
          text: 'Student Info Manager'
        },
        {
          url: 'main/system-manager',
          icon: 'fa fa-cogs',
          isSecond: false,
          hasChild: true,
          child: [],
          group: 4,
          text: 'System Manager'
        },
        {
          url: 'main/intership-manager',
          icon: 'fa fa-cogs',
          isSecond: false,
          hasChild: true,
          child: [
            {
              url: 'main/intership-manager/school',
              icon: 'fa fa-circle',
              isSecond: true,
              hasChild: false,
              group: 5,
              text: 'School'
            },
            {
              url: 'main/intership-manager/partner',
              icon: 'fa fa-circle',
              isSecond: true,
              hasChild: false,
              group: 5,
              text: 'Partner'
            },
            {
              url: 'main/intership-manager/other-company',
              icon: 'fa fa-circle',
              isSecond: true,
              hasChild: false,
              group: 5,
              text: 'Other Company'
            }
          ],
          group: 5,
          text: 'Intership Manager'
        },
        {
          url: 'main/inbox',
          icon: 'fa fa-envelope-o',
          isSecond: false,
          hasChild: true,
          child: [],
          group: 6,
          text: 'Inbox'
        },
        {
          url: 'main/report',
          icon: 'fa fa-file-text-o',
          isSecond: false,
          hasChild: true,
          child: [],
          group: 6,
          text: 'Report'
        },
      ]
    }
    else if(this.loginService.role === 'lecture') {
      this.listMenu = [
        {
          url: 'main/dashboard',
          icon: 'fa fa-tachometer',
          isSecond: false,
          hasChild: true,
          child: [],
          group: 1,
          text: 'Dashboard'
        },
        {
          url: 'main/personal',
          icon: 'fa fa-address-card-o',
          isSecond: false,
          hasChild: true,
          child: [
            {
              url: 'main/personal/profile',
              icon: 'fa fa-circle',
              isSecond: true,
              hasChild: false,
              group: 2,
              text: 'Profile'
            },
            {
              url: 'main/personal/change-password',
              icon: 'fa fa-circle',
              isSecond: true,
              hasChild: false,
              group: 2,
              text: 'Change Password'
            }
          ],
          group: 2,
          text: 'Personal Information'
        },
        {
          url: 'main/manager',
          icon: 'fa fa-cogs',
          isSecond: false,
          hasChild: true,
          child: [
            {
              url: 'main/manager/follow',
              icon: 'fa fa-circle',
              isSecond: true,
              hasChild: false,
              group: 3,
              text: 'List Follow'
            },
            {
              url: 'main/manager/other',
              icon: 'fa fa-circle',
              isSecond: true,
              hasChild: false,
              group: 3,
              text: 'Other'
            }
          ],
          group: 3,
          text: 'Manager'
        },
        {
          url: 'main/inbox',
          icon: 'fa fa-envelope-o',
          isSecond: false,
          hasChild: true,
          child: [],
          group: 4,
          text: 'Inbox'
        },
        {
          url: 'main/report',
          icon: 'fa fa-file-text-o',
          isSecond: false,
          hasChild: true,
          child: [],
          group: 4,
          text: 'Report'
        },
      ]
    }
    this.checkActive();
  }

  holdClick(event) {
    event.stopPropagation();
  }

  selectMenu(parentIndex, index) {
    if (index === -1) {
      if (this.parentIndex === parentIndex) {
        this.parentIndex = -1;
      } else {
        if (this.listMenu[parentIndex].child.length > 0) {
          this.parentIndex = parentIndex;
          this.currentIndex = -1;
        } else {
          this.currentIndex = -1;
          this.parentIndex = parentIndex;
          this.router.navigate([this.listMenu[parentIndex].url]);
          localStorage.setItem('currentUrl', this.listMenu[parentIndex].url);
        }
      }
    } else {
      this.parentIndex = parentIndex;
      this.currentIndex = index;
      this.router.navigate([this.listMenu[parentIndex].child[index].url]);
      localStorage.setItem('currentUrl', this.listMenu[parentIndex].child[index].url);
    }
  }

  isShowSubmenu(index) {
    if (index === this.parentIndex) {
      return true;
    }
    return false;
  }

  isActiveParent(index) {
    if (index === this.parentIndex) {
      return true;
    }
    return false;
  }

  isActiveChild(index) {
    if (index === this.currentIndex) {
      return true;
    }
    return false;
  }

  checkActive() {
    const currentUrl = this.router.url;
    for (let i = 0; i < this.listMenu.length; i++) {
      let temp = '/' + this.listMenu[i].url;
      if (currentUrl === temp) {
        if (this.listMenu[i].child.length > 0) {
          this.parentIndex = i;
        } else {
          this.parentIndex = i;
          this.router.navigate([this.listMenu[i].url]);
          localStorage.setItem('currentUrl', this.listMenu[i].url);
        }
      } else {
        for (let j = 0; j < this.listMenu[i].child.length ; j++) {
          let temp = '/' + this.listMenu[i].child[j].url;
          if (temp.indexOf(currentUrl) !== -1) {
            this.parentIndex = i;
            this.currentIndex = j;
            this.router.navigate([this.listMenu[i].child[j].url]);
            localStorage.setItem('currentUrl', this.listMenu[i].child[j].url);
          }
        }
      }
    }
  }

  changeMenu() {
    this.isFullMenu = !this.isFullMenu;
    this.parrentSecondIndex = -1;
    if (!this.isFullMenu) {
      $('#container').toggleClass('icon-left-menu');
    } else {
      $('#container').removeClass('icon-left-menu');
    }
  }

  selectIconMenu(parentIndex, index) {
    if (index === -1) {
      if (this.parrentSecondIndex === parentIndex) {
        this.parrentSecondIndex = -1;
      } else {
        if (this.listMenu[parentIndex].child.length > 0) {
          if (this.parentIndex !== parentIndex) {
            this.currentIndex = -1;
          }
          this.parentIndex = parentIndex;
          this.parrentSecondIndex = parentIndex;
        } else {
          this.parrentSecondIndex = parentIndex;
          this.parentIndex = parentIndex;
          this.currentIndex = -1;
          this.router.navigate([this.listMenu[parentIndex].url]);
          localStorage.setItem('currentUrl', this.listMenu[parentIndex].url);
        }
      }
    } else {
      this.parentIndex = parentIndex;
      this.parrentSecondIndex = 0;
      this.currentIndex = index;
      this.router.navigate([this.listMenu[parentIndex].child[index].url]);
      localStorage.setItem('currentUrl', this.listMenu[parentIndex].child[index].url);
    }
  }

  isShowIconsubMenu (index) {
   if (index === this.parrentSecondIndex) {
     return true;
   }
   return false;
  }

}
