import { Component, OnInit } from '@angular/core';
import { getStyle, hexToRgba } from '@coreui/coreui/dist/js/coreui-utilities';
import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips';
import {Observable} from 'rxjs';
import {debounceTime, distinctUntilChanged, map} from 'rxjs/operators';
import { ActivatedRoute, Route, ActivatedRouteSnapshot, UrlSegment, Params, Data, Router } from '@angular/router';


@Component({
  templateUrl: 'newaccountBasic.component.html'
})
export class NewaccountBasicComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private router: Router,
  ) {
    console.log("constructing NewaccountBasicComponent")
  }

  id: string;
  
  accountInfo={};
  accountList=[];

  next(): void {
      this.accountInfo['Status'] = '1. Quotation'; 
      var foundindex=-1;
      for (var i=0; i< this.accountList.length; i ++) {
         if (this.accountList[i]['Company Name'] === this.accountInfo['Company Name']) {
            foundindex=i;
            break;
         }
      }
      if (foundindex >= 0 ) {
         this.accountList[foundindex] = this.accountInfo;
      } else {
         this.accountList.push(this.accountInfo);
      }
      localStorage.setItem('accountList', JSON.stringify(this.accountList));
      this.router.navigate(['newaccount','quotation', this.id]);
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
       var stringAccountList = localStorage.getItem('accountList');
       this.accountList = JSON.parse(stringAccountList);
       if (!this.accountList) {
           this.accountList = [ {"Company Name": "TCC Consulting Service Limited", "Status": "3. Enter account details"},  {"Company Name": "Cloud Consulting Service Limited", "Status": "2. Invoice"}];
       }
       var foundindex = -1;
       for (var i=0;i < this.accountList.length; i++) {
          console.log("Company Name:"+this.accountList[i]['Company Name']);
          if (this.accountList[i]['Company Name'] === this.id) {
             foundindex = i;
             break;
          }
       }
       console.log("found index:"+ foundindex);
       if (foundindex >0 ) this.accountInfo = this.accountList[foundindex];
       this.accountInfo["Company Name"] = this.id;
    });

  }
}
