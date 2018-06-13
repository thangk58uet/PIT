
import { group } from '@angular/animations/src/animation_metadata';
import { NgModule, Component, enableProdMode, OnInit, ViewEncapsulation } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { DxDataGridModule, DxButtonModule, DxLookupModule } from 'devextreme-angular';
declare const $: any;
import { confirm } from 'devextreme/ui/dialog';
import { alert} from 'devextreme/ui/dialog';
import { DashboardService } from './dashboard.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DashboardComponent implements OnInit {

  columnChooserModes = {
    key: 'select',
    name: 'Select'
  };
  allMode = 'allPages';
  checkBoxesMode = 'always';
  columns: any[];
  employees = [];
  popupVisible = false;
  idModify = '';
  partner = '';
  contentArray = '';
  constructor(private dashboardService: DashboardService) {
  }
  ngOnInit() {
    this.getData();
  }

  getData(){
    this.dashboardService.getData().subscribe(res => {
      this.employees = res;
      console.log(res);
    })
  }

  showDetailMail(id) {
    // let array = {
    //     "name": "a",
    //     "content": this.allMode,
    //     "partner": "Eschweiler",
    //     "startDate": "sebastian@codingthesmartway.com",
    //     "endDate": "a",
    //     "id": Math.random()
    // };
    // this.dashboardService.postData(array).subscribe(res => {

    // });
    // this.getData();
    this.popupVisible = true;
    this.dashboardService.getDataById(id).subscribe(res => {
      this.contentArray = res.content;
      this.partner = res.partner;
    })
  }

  delete(id) {
    this.dashboardService.deleteData(id).subscribe(() => {
    })
    console.log(id);
    this.getData();
  }

  add() {
    this.popupVisible = true;
  }

  hidePopup() {}
  reloadTable() {}
}
