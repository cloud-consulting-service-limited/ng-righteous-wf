import { Component, OnInit } from '@angular/core';
import { getStyle, hexToRgba } from '@coreui/coreui/dist/js/coreui-utilities';
import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips';
import { ActivatedRoute, Route, ActivatedRouteSnapshot, UrlSegment, Params, Data } from '@angular/router';


@Component({
  templateUrl: 'dashboard.component.html'
})
export class DashboardComponent implements OnInit {
  
  id: string;

  constructor(
    private route: ActivatedRoute, 
  ) {
    console.log("contructing DashboardComponent")
  }

  ngOnInit(): void {
    // generate random values for mainChart
    this.route.params.subscribe(params => {

    let route = this.route.snapshot;

    while (route.firstChild) {
        route = route.firstChild;
    }


    this.id =  route.params['id']; 
    console.log ("id: " + this.id);
    route.data.title = "Create Details: "+this.id;
    });
  }
}
