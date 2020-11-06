import { Component, OnInit } from '@angular/core';
import { getStyle, hexToRgba } from '@coreui/coreui/dist/js/coreui-utilities';
import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips';
import { Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';
import { ActivatedRoute, Route, ActivatedRouteSnapshot, UrlSegment, Params, Data, Router } from '@angular/router';




@Component({
  templateUrl: 'auditPreAuditS1.component.html',
  styles: [
    `
      .input-group>.input-group-prepend {
          flex: 0 0 20%;
      } .input-group .input-group-text {
          width: 100%;
      }
    `
  ]
})
export class AuditPreAuditS1Component implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private router: Router,
  ) {
    console.log('contructing AuditCoInfoComponent');
  }
  accountDetail = {};
  auditInfo = {};
  accountList = [];
  accountInfo = {};
  myroute = {};
  id: string;
  currentYearString: string;


  document = {};

  documentRequestList = [
    { 'Chinese': '業務性質', 'English': 'Principal Activities', 'Asked': false, 'Uploaded': false, 'Checked': false} ,
    { 'Chinese': '年結日', 'English': 'Proposed first year end', 'Asked': false, 'Uploaded': false, 'Checked': false},
    { 'Chinese': '最近一年審計報告', 'English': 'Last year audit report', 'Asked': false, 'Uploaded': false, 'Checked': false},
    { 'Chinese': '最近一年稅計算表', 'English': 'Last year tax computation', 'Asked': false, 'Uploaded': false, 'Checked': false},
    { 'Chinese': '最近一年報稅表', 'English': 'Last year profits tax return', 'Asked': false, 'Uploaded': false, 'Checked': false},
    { 'Chinese': '所有銀行月結單', 'English': 'All bank statements for the audit period', 'Asked': false, 'Uploaded': false, 'Checked': false},
    { 'Chinese': '簽回附件的銀行詢証函', 'English': 'Sign and return back the bank confirmation', 'Asked': false, 'Uploaded': false, 'Checked': false},
    { 'Chinese': '簽回附件的稅務代表委任書', 'English': 'Sign and return back the appointmnet letter of tax rep', 'Asked': false, 'Uploaded': false, 'Checked': false},
    { 'Chinese': '簽回附件的核數師委任書', 'English': 'Sign and return back the engagement letters', 'Asked': false, 'Uploaded': false, 'Checked': false},
    { 'Chinese': '所有董事及股東的身份證', 'English': 'Please provide the HKID of all directors & shareholders', 'Asked': false, 'Uploaded': false, 'Checked': false},
    { 'Chinese': '請提供商業登記證', 'English': 'Please provide the BR of the Company', 'Asked': false, 'Uploaded': false, 'Checked': false},
    { 'Chinese': '收支表，資產負債表，明細表', 'English': 'Current year profit and loss and balance sheet, and ledger', 'Asked': false, 'Uploaded': false, 'Checked': false},
    { 'Chinese': '僱主填報的薪酬及退休金報稅表', 'English': 'All Employers\' return (56B form)', 'Asked': false, 'Uploaded': false, 'Checked': false},
    { 'Chinese': '租約', 'English': 'Tenancy agreement', 'Asked': false, 'Uploaded': false, 'Checked': false},
    { 'Chinese': '請提供以下文件', 'English': 'Statutory documents as per attachment', 'Asked': false, 'Uploaded': false, 'Checked': false}
    ];
   get documentContentHeader() {
     let returnString = '';
     if ( this.document['sentDate']) {
        returnString = 'Document Upload Request - ( Sent on ' + new Date(this.document['sentDate']) + ' )';
     } else {
        returnString = 'Document Upload Request - New';
     }
     return returnString;
   }
  requestDocument(): void {
    this.document['sentDate'] = new Date();
  }
  confirmDocument(): void {
    console.log("next");
    this.router.navigate(['audit', 'TB', this.accountInfo['Company Name'],this.currentYearString]);

  }
  ngOnInit(): void {
    // generate random values for mainChart
    this.route.params.subscribe(params => {
      // this.id = +params['id']; // (+) converts string 'id' to a number

      let route = this.route.snapshot;

      while (route.firstChild) {
        route = route.firstChild;
        this.myroute = Object.assign(this.myroute, route.params );
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
      if (foundindex < 0) { return; }
      this.accountInfo = this.accountList[foundindex];
      if (this.accountInfo['accountDetail']) {
        this.accountDetail = this.accountInfo['accountDetail'];
      }
      if (this.accountInfo['audit'] && this.accountInfo['audit'][this.currentYearString]) {
        this.auditInfo = this.accountInfo['audit'][this.currentYearString];
      }

    });
  }

}
