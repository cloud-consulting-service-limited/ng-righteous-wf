import { Component, OnInit } from '@angular/core';
import { getStyle, hexToRgba } from '@coreui/coreui/dist/js/coreui-utilities';
import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips';
import {Observable} from 'rxjs';
import {debounceTime, distinctUntilChanged, map} from 'rxjs/operators';
import { ActivatedRoute, Route, ActivatedRouteSnapshot, UrlSegment, Params, Data } from '@angular/router';


@Component({
  templateUrl: 'newaccount.component.html'
})
export class NewaccountComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
  ) {
    console.log("constructing NewaccountComponent")
  }

  selected: string;
  noResult = true;
  id: string;
   
  states: string[] = [
    "TCC Consulting Service Limited",
    "Cloud Consulting Service Limited",
    "SKS Future Limited"
  ];
  ngOnInit(): void {
    // generate random values for mainChart
    this.route.params.subscribe(params => {
       // this.id = +params['id']; // (+) converts string 'id' to a number
       this.id = params['id']; 
       console.log("id: "+this.id);
    });
  }

  typeaheadNoResults(event: string): void {
    this.noResult = (!this.states.includes(this.selected));
  }

}
