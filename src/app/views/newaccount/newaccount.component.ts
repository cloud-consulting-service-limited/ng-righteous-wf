import { Component, OnInit } from '@angular/core';
import { getStyle, hexToRgba } from '@coreui/coreui/dist/js/coreui-utilities';
import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips';
import {Observable} from 'rxjs';
import {debounceTime, distinctUntilChanged, map} from 'rxjs/operators';
import { ActivatedRoute, Route, ActivatedRouteSnapshot, UrlSegment, Params, Data, Router} from '@angular/router';


@Component({
  templateUrl: 'newaccount.component.html'
})
export class NewaccountComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private router: Router,
  ) {
    console.log('constructing NewaccountComponent');
  }

  selected: string;
  accountList: any;
  selectedIndex: string;
  noResult = true;
  id: string;

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
    console.log(stringAccountList);
    this.accountList = JSON.parse(stringAccountList);
    if (!this.accountList) {
        this.accountList = [ {'Company Name': 'TCC Consulting Service Limited', 'Status': '3. Upload Documents'},  {'Company Name': 'Cloud Consulting Service Limited', 'Status': '2. Invoice'}];
    }
    this.tableRows = this.accountList;

  }

  typeaheadNoResults(event: string): void {
    let foundindex = -1;
    for (let i = 0; i < this.tableRows.length; i ++) {
      if (this.tableRows[i]['Company Name'] === this.selected) {
         foundindex = i;
         break;
      }
    }
    if (foundindex >= 0) { this.selectedIndex = foundindex.toString(); }
    this.noResult = (foundindex < 0 );
  }

}
