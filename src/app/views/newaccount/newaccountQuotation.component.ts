import { Component, OnInit, ViewChild } from '@angular/core';
import { getStyle, hexToRgba } from '@coreui/coreui/dist/js/coreui-utilities';
import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips';
import {Observable} from 'rxjs';
import {debounceTime, distinctUntilChanged, map} from 'rxjs/operators';
import { ActivatedRoute, Route, ActivatedRouteSnapshot, UrlSegment, Params, Data, Router } from '@angular/router';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import {TemplateRef} from '@angular/core';




@Component({
  templateUrl: 'newaccountQuotation.component.html'
})
export class NewaccountQuotationComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private modalService: BsModalService,
    private router: Router,
  ) {
    console.log("constructing NewaccountQuotationComponent")
  }
  modalRef: BsModalRef;
  id: string;

  @ViewChild('quotationSentMsgTemplate') templateref: TemplateRef<any>;
  quotation={};

  accountInfo={};
  accountList=[];

  discount=0;
  deposit=0;

  confirmQuotation(): void {
      this.accountInfo['quotations'][0]['confirmed']=true;
      this.accountInfo['quotations'][0]['confirmed date']= new Date();
      this.accountInfo['Status'] = '2. Invoice';
      for (var i=1; i< this.accountInfo['quotations'].length; i++ ) {
          this.accountInfo['quotations'][i]['confirmed']=false;
      }
      localStorage.setItem('accountList', JSON.stringify(this.accountList));
      this.router.navigate(['newaccount','invoice', this.id]);
  }
  next(): void {
      this.quotation['discount'] = this.discount;
      this.quotation['deposit'] = this.deposit;
      this.quotation['lineItems'] = this.tableRows;
      this.quotation['sentDate'] = new Date();
      this.quotation['total'] = this.total;
      var quotations = [];
      if (this.accountInfo['quotations']) {
         this.accountInfo['quotations'].unshift(this.quotation);
      } else {
         quotations.push(this.quotation);
         this.accountInfo['quotations'] = quotations;
      }
      localStorage.setItem('accountList', JSON.stringify(this.accountList));
      this.modalRef = this.modalService.show(this.templateref);
  }



  tableRows = [];
  lineOptions = ["Audit","Tax Filing","Tax Service","NAR1","Act as Co Sec", "RO Service","Disbursement","BR Fee","Incorporation","Share Transfer","Deregistration","Rental"];
  add() {
    let temp = [...this.tableRows];
    temp.push({"Product":"Audit","Description":"","Amount":"0"});
    console.log(JSON.stringify(temp));
    this.tableRows = temp;
  }
  deleteRow(rowIndex) {
    let temp = [...this.tableRows];
    temp.splice(rowIndex, 1);
    this.tableRows = temp;
  };
  get quotationContentHeader() {
    var returnString="";
    if ( this.quotation["sentDate"]) {
       returnString = "Quotation Content - ( Sent on " + new Date(this.quotation["sentDate"]) +" )";
    } else {
       returnString = "Quotation Content - New"
    }
    return returnString;
  }
  get total() {
     var total = 0;
     total = this.subTotal- this.discount;
     return total;
  };
  get balanceDue() {
     var balanceDue = 0;
     balanceDue = this.total- this.deposit;
     return balanceDue;
  };
  get subTotal() {
     var sum=0;
     for (var i=0; i< this.tableRows.length; i++) {
        sum += this.tableRows[i]['Amount'];
     }
     return sum;
  };

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
       var tmp = new Date();
       var now = new Date(tmp.getFullYear(), tmp.getMonth(), tmp.getDate());
       var exp = new Date(tmp.getFullYear(), tmp.getMonth()+1, tmp.getDate());
       this.quotation["Quotation Date"] = now;
       this.quotation["Expiry Date"] = exp;
       if (this.accountInfo['quotations'] && this.accountInfo['quotations'][0]) {
          this.quotation = this.accountInfo['quotations'][0];
          this.tableRows = this.accountInfo['quotations'][0]['lineItems'];
          this.discount = this.accountInfo['quotations'][0]['discount'];
          this.deposit = this.accountInfo['quotations'][0]['deposit'];
          this.quotation["Expiry Date"] = new Date(this.quotation["Expiry Date"]);
          this.quotation["Quotation Date"] = new Date(this.quotation["Quotation Date"]);
       }
    });

  }
}
