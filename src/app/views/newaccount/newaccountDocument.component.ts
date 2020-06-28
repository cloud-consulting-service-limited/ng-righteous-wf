import { Component, OnInit, ViewChild } from '@angular/core';
import { getStyle, hexToRgba } from '@coreui/coreui/dist/js/coreui-utilities';
import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips';
import {Observable} from 'rxjs';
import {debounceTime, distinctUntilChanged, map} from 'rxjs/operators';
import { ActivatedRoute, Route, ActivatedRouteSnapshot, UrlSegment, Params, Data, Router } from '@angular/router';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import {TemplateRef} from '@angular/core';




@Component({
  templateUrl: 'newaccountDocument.component.html'
})
export class NewaccountDocumentComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private modalService: BsModalService,
    private router: Router,
  ) {
    console.log("constructing NewaccountDocumentComponent")
  }
  modalRef: BsModalRef;
  id: string;
  
  @ViewChild('documentSentMsgTemplate') templateref: TemplateRef<any>;  
  document={};

  accountInfo={};
  accountList=[];
  
  discount=0;
  deposit=0;

  confirmDocument(): void {
      this.accountInfo['documents'][0]['confirmed']=true;
      this.accountInfo['documents'][0]['confirmed date']= new Date();
      this.accountInfo['Status'] = '2. Document';
      for (var i=1; i< this.accountInfo['documents'].length; i++ ) {
          this.accountInfo['documents'][i]['confirmed']=false;
      }
      localStorage.setItem('accountList', JSON.stringify(this.accountList));
      this.router.navigate(['newaccount','document', this.id]);
  }
  next(): void {
      this.document['documentRequestList'] = this.documentRequestList;
      var cnt = 0;
      for (var i=0; i< this.documentRequestList.length; i++) {
          if (this.documentRequestList[i]['Asked']) {
	      cnt ++;
	  }
      }
      this.document['sentDate'] = new Date();
      this.document['documentAskedCount'] = cnt;
      var documents = [];
      if (this.accountInfo['documents']) {
         this.accountInfo['documents'].unshift(this.document);
      } else {
         documents.push(this.document);
         this.accountInfo['documents'] = documents;
      }
      localStorage.setItem('accountList', JSON.stringify(this.accountList));
      this.modalRef = this.modalService.show(this.templateref);
  }   



  documentRequestList = [
   { "Chinese": "業務性質", "English":"Principal Activities", "Asked": false, "Uploaded": false, "Checked": false} ,
   { "Chinese": "年結日", "English":"Proposed first year end", "Asked": false, "Uploaded": false, "Checked": false},
   { "Chinese": "最近一年審計報告", "English":"Last year audit report", "Asked": false, "Uploaded": false, "Checked": false},
   { "Chinese": "最近一年稅計算表", "English":"Last year tax computation", "Asked": false, "Uploaded": false, "Checked": false},
   { "Chinese": "最近一年報稅表", "English":"Last year profits tax return", "Asked": false, "Uploaded": false, "Checked": false},
   { "Chinese": "所有銀行月結單", "English":"All bank statements for the audit period", "Asked": false, "Uploaded": false, "Checked": false},
   { "Chinese": "簽回附件的銀行詢証函", "English":"Sign and return back the bank confirmation", "Asked": false, "Uploaded": false, "Checked": false},
   { "Chinese": "簽回附件的稅務代表委任書", "English":"Sign and return back the appointmnet letter of tax rep", "Asked": false, "Uploaded": false, "Checked": false},
   { "Chinese": "簽回附件的核數師委任書", "English":"Sign and return back the engagement letters", "Asked": false, "Uploaded": false, "Checked": false},
   { "Chinese": "所有董事及股東的身份證", "English":"Please provide the HKID of all directors & shareholders", "Asked": false, "Uploaded": false, "Checked": false},
   { "Chinese": "請提供商業登記證", "English":"Please provide the BR of the Company", "Asked": false, "Uploaded": false, "Checked": false},
   { "Chinese": "收支表，資產負債表，明細表", "English":"Current year profit and loss and balance sheet, and ledger", "Asked": false, "Uploaded": false, "Checked": false},
   { "Chinese": "僱主填報的薪酬及退休金報稅表", "English":"All Employers' return (56B form)", "Asked": false, "Uploaded": false, "Checked": false},
   { "Chinese": "租約", "English":"Tenancy agreement", "Asked": false, "Uploaded": false, "Checked": false},
   { "Chinese": "請提供以下文件", "English":"Statutory documents as per attachment", "Asked": false, "Uploaded": false, "Checked": false}
   ];
  get documentContentHeader() {
    var returnString="";
    if ( this.document["sentDate"]) {
       returnString = "Document Upload Request - ( Sent on " + new Date(this.document["sentDate"]) +" )";
    } else {
       returnString = "Document Upload Request - New"
    }
    return returnString;
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
       console.log("id: "+this.id);
       var stringInput = localStorage.getItem('accountList');
       this.accountList = JSON.parse(stringInput);
       if (!this.accountList) {
           return;
       }
       
       var foundindex=0;
       for (var i=0; i < this.accountList.length; i ++) {
           if (this.accountList[i]['Company Name'] === this.id){
               foundindex = i;
               break;
           }
       }
       if (foundindex < 0 ) return;
       this.accountInfo = this.accountList[foundindex];
       this.accountInfo['Display Name'] = this.accountInfo["First Name"] + " " + this.accountInfo["Last Name"];
       if (this.accountInfo['documents'] && this.accountInfo['documents'][this.accountInfo['documents'].length - 1]) {
          this.document = this.accountInfo['documents'][0];
	  this.documentRequestList = this.accountInfo['documents'][0].documentRequestList;
       } 
    });

  }
}
