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

  tableRows = [ {'Company Name': 'TCC Consulting Service Limited', 'Status': '3. Enter account details'},  {'Company Name': 'Cloud Consulting Service Limited', 'Status': '2. Invoice'}];

  tableHeaders = [{'name': 'Company Name', 'prop': 'Company Name'}, {'name': 'Status', 'prop': 'Status'}];

  continue(rowIndex): void {
    const account = this.tableRows[rowIndex];
    const status = account['Status'].charAt(0);
    let route = '';
    switch (status) {
     case '1':
       route = 'quotation';
       break;
     case '2':
       route = 'invoice';
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
    console.log('status:' + status + ' route:' + route);
    this.router.navigate(['newaccount', route, account['Company Name']]);

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
    this.currentYearString = this.currentYear.getFullYear().toString();
    for (let i = 0; i < this.accountList.length; i++) {
      console.log('name: ' + JSON.stringify(this.accountList[i]['Company Name']));
      console.log('currentYear: ' + this.currentYearString);


      if (this.accountList[i]['audit'] && this.accountList[i]['audit'][this.currentYearString]) {
        console.log('audit: ' + JSON.stringify(this.accountList[i]['audit']));
        console.log('audit currentYear: ' + JSON.stringify(this.accountList[i]['audit'][this.currentYearString]));
        let tmpObj: { 'Company Name': string; 'Status': string; } = {
          'Company Name': this.accountList[i]['Company Name'],
          'Status': this.accountList[i]['audit'][this.currentYearString]['Audit Status']
        };
        temp.push(tmpObj);
      }
    }
    this.tableRows = temp;
  }
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
         if (this.accountList[i]['audit'] && this.accountList[i]['audit'][this.currentYearString]) {
          foundindex = i;
         }
         break;
      }
    }
    if (foundindex >= 0) { this.selectedIndex = foundindex.toString(); }
    this.noResult = (foundindex < 0 );
  }

}
