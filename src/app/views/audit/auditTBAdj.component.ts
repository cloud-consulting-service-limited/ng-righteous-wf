import { Component, OnInit,  ElementRef } from '@angular/core';
import { ViewportScroller } from '@angular/common';
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
import { LoginComponent } from '../login/login.component';

@Component({
  templateUrl: 'auditTBAdj.component.html',
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
      
      .table-condensed>thead>tr>th, .table-condensed>tbody>tr>th, .table-condensed>tfoot>tr>th, .table-condensed>thead>tr>td, .table-condensed>tbody>tr>td, .table-condensed>tfoot>tr>td {
        padding: 1px;
        }
        .overlay-button{
          position: fixed;
          bottom: 0;
          right: 0;
          color: black;
        }
    `
  ],
})
export class AuditTBAdjComponent implements OnInit {
  constructor(private route: ActivatedRoute, private router: Router, private elementRef: ElementRef, private viewportScroller: ViewportScroller) {
    console.log('contructing AuditTBAdjComponent');
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
  thisAdjustment = [{"account":"","type":"","Adjustment":""}];
  thisAdjustmentTypes = ["Opening adjustments", "Exchange difference" ,"Audit fee", "Depreciation"];
  thisHeaders = [
    'Account break down',
    'Group as per audit record',
    'Last Year Audit',
    'Current Year Audit',
    'Current Year Pe Client',
    'Current Year Adjustment',
    'Current Year Audit',
  ];
  //thisStartTime = new Date().getTime();
  //thisEndTime = new Date().getTime();
  // adjustment for Opening Adjustment
  // adjustment for Exchange Difference
  // adjustment for Audit Fee
  // adjustment for Depreciation
  addAddjustment(thisIndex) {
    let temp = [...this.thisAdjustment];
    console.log("thisIndex: "+thisIndex);
    let myindex = thisIndex?thisIndex:temp.length;
    console.log("myindex: "+myindex);
    temp.splice(myindex,0,{"account":"","type":"","Adjustment":""});
    this.thisAdjustment = temp;
  }
  fetch(cb) {
    const req = new XMLHttpRequest();
    //this.thisStartTime = new Date().getTime();
    req.open('GET', `assets/data/TBTemplate.json`);

    req.onload = () => {
      //this.thisEndTime = new Date().getTime();
      //console.log("!!!!!! SSSSSSSSSSSSSSSSSSSS  used1:"+( (this.thisEndTime -this.thisStartTime)  / 1000.0 )+" seconds");
      cb(JSON.parse(req.response));
      //this.thisEndTime = new Date().getTime();
      //console.log("!!!!!! SSSSSSSSSSSSSSSSSSSS  used:"+( (this.thisEndTime -this.thisStartTime)  / 1000.0 )+" seconds");
    };

    req.send();
  }
  genDocSend(){
    this.auditInfo['TB'] = this.thisTB;
    localStorage.setItem('accountList',JSON.stringify(this.accountList));
    return;
  }
  scroll(id: any){
    this.viewportScroller.scrollToAnchor(id);
  }

  scrollToTop(){
    this.viewportScroller.scrollToPosition([0,0]);
  }

  keytab(event) {
    event.preventDefault();
    let myid = event.srcElement.attributes.id.nodeValue;
    console.log("id0: "+ myid.replace("input",""));
    let myidInt = parseInt(myid.replace("input",""));
  
    console.log("id1: "+ myidInt);
    console.log("id2: "+ (myidInt+1));
    document.getElementById('input'+(myidInt+1)).focus();
    

    // event.preventDefault();
    
    // let element = event.srcElement.nextElementSibling; // get the sibling element

    // if(element == null) {  // check if its null
    //   console.log("haha");
    //   return;
    // }
    // else {
    //   console.log("hehe");
    //     element.focus();   // focus if not null
    // }
  }
  
  getSumAdjustment() {
    let  sum = 0.0;
    if (!this.thisAdjustment) return sum;
    for(let rawRecord of this.thisAdjustment) {
      if (rawRecord['Adjustment']) {
        sum += parseFloat(rawRecord['Adjustment']);
      }
    }
    return sum;
  }
  getSumLA() {
    let  sum = 0.0;
    if (!this.thisTB) return sum;
    for(let rawRecord of this.thisTB) {
      if (rawRecord['Last Year Audit']) {
        sum += parseFloat(rawRecord['Last Year Audit']);
      }
    }
    return sum;
  }
  getSumCA() {
    let  sum = 0.0;
    if (!this.thisTB) return sum;
    for(let rawRecord of this.thisTB) {
      if (rawRecord['Current Year Pe Client']) {
        sum += parseFloat(rawRecord['Current Year Pe Client']);
      }
    }
    return sum;
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
