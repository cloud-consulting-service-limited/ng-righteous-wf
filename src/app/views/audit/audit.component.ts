import { Component, OnInit } from '@angular/core';
import { getStyle, hexToRgba } from '@coreui/coreui/dist/js/coreui-utilities';
import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips';
import {Observable} from 'rxjs';
import {debounceTime, distinctUntilChanged, map} from 'rxjs/operators';
import { ActivatedRoute, Route, ActivatedRouteSnapshot, UrlSegment, Params, Data, Router} from '@angular/router';

@Component({
  templateUrl: 'audit.component.html'
})
export class AuditComponent implements OnInit {
  accountInfo: any;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
  ) {
    console.log('constructing AuditComponent');
  }

  selected: string;
  accountList: any;
  selectedIndex: string;
  noResult = true;
  id: string;

  currentYear: Date;
  currentYearString: string;

  tableRows = [ {'Year': 'TCC Consulting Service Limited', 'Status': '3. Enter account details'},  {'Year': 'Cloud Consulting Service Limited', 'Status': '2. Invoice'}];

  tableHeaders = [{'name': 'Year', 'prop': 'Year'}, {'name': 'Status', 'prop': 'Status'}];

  newAudit(): void {
    this.router.navigate(['audit', "coinfo", this.accountInfo['Company Name'], this.currentYear.getFullYear() + "-"+(this.currentYear.getFullYear()+1)])
  }
  continue(rowIndex): void {
    const account = this.tableRows[rowIndex];
    const status = account['Status'].charAt(0);
    let route = '';
    switch (status) {
     case '0':
       route = 'coinfo';
       break;
     case '1':
       route = 'preAuditDoc';
       break;
     case '2':
       route = 'TB';
       break;
     case '3':
       route = 'document';
       break;
     case '4':
       route = 'detail';
       break;
     default:
       route = 'create';
    }
    console.log('status:' + status + ' route:' + route + ' Year:'+account['Year']);
    this.router.navigate(['audit', route, this.accountInfo['Company Name'],account['Year']]);

  }


  yearChange(): void {
    console.log('haha');
    this.reloadData();
  }
  reloadData(): void {
    let temp = [...this.tableRows];
    while (temp.length > 0) {
      temp.pop();
    }
    if (this.accountInfo && this.accountInfo['audit']) {
      for (let key of Object.keys(this.accountInfo['audit'])) {
        const tmpObj: { 'Year': string; 'Status': string; } = {
          'Year': key,
          'Status': this.accountInfo['audit'][key]['Audit Status']
        };
        temp.push(tmpObj);
      }
    }
    this.tableRows = temp;
  }
  // reloadData(): void {
  //   let temp = [...this.tableRows];
  //   while (temp.length > 0) {
  //     temp.pop();
  //   }
  //   this.currentYearString = this.currentYear.getFullYear().toString();
  //   for (let i = 0; i < this.accountList.length; i++) {
  //     console.log('name: ' + JSON.stringify(this.accountList[i]['Company Name']));
  //     console.log('currentYear: ' + this.currentYearString);


  //     if (this.accountList[i]['audit'] && this.accountList[i]['audit'][this.currentYearString]) {
  //       const tmpObj: { 'Company Name': string; 'Status': string; } = {
  //         'Company Name': this.accountList[i]['Company Name'],
  //         'Status': this.accountList[i]['audit'][this.currentYearString]['Audit Status']
  //       };
  //       temp.push(tmpObj);
  //     }
  //   }
  //   this.tableRows = temp;
  // }
  ngOnInit(): void {
    // generate random values for mainChart
    this.route.params.subscribe(params => {
       // this.id = +params['id']; // (+) converts string 'id' to a number
       let route = this.route.snapshot;

       while (route.firstChild) {
           route = route.firstChild;
       }


       this.id =  route.params['id'];
       console.log('id: ' + this.id);
    });

    const stringAccountList = localStorage.getItem('accountList');

    this.accountList = JSON.parse(stringAccountList);

    if (!this.accountList) {
        this.accountList = [ {'Company Name': 'TCC Consulting Service Limited', 'Status': '3. Upload Documents'},  {'Company Name': 'Cloud Consulting Service Limited', 'Status': '2. Invoice'}];
    }
    this.tableRows = [];
    this.currentYear = new Date();

    this.reloadData();

  }

  typeaheadNoResults(event: string): void {
    let foundindex = -1;
    for (let i = 0; i < this.accountList.length; i ++) {
      if (this.accountList[i]['Company Name'] === this.selected) {
         //if (this.accountList[i]['audit'] && this.accountList[i]['audit'][this.currentYearString]) {
          foundindex = i;
          this.accountInfo = this.accountList[i];
          this.reloadData();
         //}
         break;
      }
    }
    if (foundindex >= 0) { this.selectedIndex = foundindex.toString(); }
    this.noResult = (foundindex < 0 );
  }

}
