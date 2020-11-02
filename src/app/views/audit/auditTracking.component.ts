import { Component, OnInit } from '@angular/core';
import { getStyle, hexToRgba } from '@coreui/coreui/dist/js/coreui-utilities';
import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips';
import { Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';
import { ActivatedRoute, Route, ActivatedRouteSnapshot, UrlSegment, Params, Data, Router } from '@angular/router';




@Component({
  templateUrl: 'auditTracking.component.html',
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
export class AuditTrackingComponent implements OnInit {
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

  get header(){
    return 'test';
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
