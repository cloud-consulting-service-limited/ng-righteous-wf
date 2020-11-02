import { Component, OnInit } from '@angular/core';
import { getStyle, hexToRgba } from '@coreui/coreui/dist/js/coreui-utilities';
import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips';
import { Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';
import {
  ActivatedRoute,
  Route,
  ActivatedRouteSnapshot,
  UrlSegment,
  Params,
  Data,
  Router,
} from '@angular/router';

@Component({
  templateUrl: 'auditTB.component.html',
  styles: [
    `
      .input-group > .input-group-prepend {
        flex: 0 0 20%;
      }
      .input-group .input-group-text {
        width: 100%;
      }
      :host >>> .card.customClass,
      :host >>> .card.customClass .card-header,
      :host >>> .panel-heading.customClass,
      :host >>> .panel.customClass {
        padding: 0px;
      }

      :host >>> .panel.customClass .panel-body {
        padding: 0px;
      }
    `
  ],
})
export class AuditTBComponent implements OnInit {
  constructor(private route: ActivatedRoute, private router: Router) {
    console.log('contructing AuditTBComponent');
  }
  customClass = 'customClass';
  accountDetail = {};
  auditInfo = {};
  accountList = [];
  accountInfo = {};
  myroute = {};
  id: string;
  currentYearString: string;
  thisTB: [];
  thisHeaders = [
    'Account break down',
    'Group as per audit record',
    'Last Year Audit',
    'Current Year Audit',
    'Current Year Pe Client',
    'Current Year Adjustment',
    'Current Year Audit',
  ];
  // adjustment for Opening Adjustment
  // adjustment for Exchange Difference
  // adjustment for Audit Fee
  // adjustment for Depreciation
  fetch(cb) {
    const req = new XMLHttpRequest();
    req.open('GET', `assets/data/TBTemplate.json`);

    req.onload = () => {
      cb(JSON.parse(req.response));
    };

    req.send();
  }
  genDocSend(){
    this.auditInfo['TB'] = this.thisTB;
    localStorage.setItem('accountList',JSON.stringify(this.accountList));
    return;
  }

  getAdjustmentForHeader(input: [] ) {
    let returnStr: string;
    returnStr = '';
    for (let i = 0; i < input.length; i++) {
      if (input[i]['value']) {
        returnStr += input[i]['name'] + ': $ ' + input[i]['value'] + ' , ';
      }
    }
    if (returnStr.length > 0) {
      return 'Adjustment for [' + returnStr + ']';
    } else {
      return 'Add Adjustment';
    }
  }
  ngOnInit(): void {
    // generate random values for mainChart
    this.route.params.subscribe((params) => {
      // this.id = +params['id']; // (+) converts string 'id' to a number

      let route = this.route.snapshot;

      while (route.firstChild) {
        route = route.firstChild;
        this.myroute = Object.assign(this.myroute, route.params);
      }

      console.log('route: ', JSON.stringify(this.myroute));
      this.id = this.myroute['id'];
      this.currentYearString = this.myroute['year'];

      const stringInput = localStorage.getItem('accountList');
      this.accountList = JSON.parse(stringInput);
      if (!this.accountList) {
        return;
      }

      let foundindex = -1;
      for (let i = 0; i < this.accountList.length; i++) {
        if (this.accountList[i]['Company Name'] === this.id) {
          foundindex = i;
          break;
        }
      }
      if (foundindex < 0) {
        return;
      }

      this.accountInfo = this.accountList[foundindex];
      console.log('accountInfo:' + this.accountInfo);
      if (this.accountInfo['accountDetail']) {
        this.accountDetail = this.accountInfo['accountDetail'];
      }
      if (
        this.accountInfo['audit'] &&
        this.accountInfo['audit'][this.currentYearString]
      ) {
        this.auditInfo = this.accountInfo['audit'][this.currentYearString];
      }
      if (!this.auditInfo['TB']) {
        this.fetch((data) => {
          this.thisTB = data;
        });
      } else {
        this.thisTB = this.auditInfo['TB'];
      }
    });
  }
}
