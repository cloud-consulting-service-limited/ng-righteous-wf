import { Component, OnInit } from '@angular/core';
import { getStyle, hexToRgba } from '@coreui/coreui/dist/js/coreui-utilities';
import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips';

@Component({
  templateUrl: 'loaddata.component.html'
})
export class LoaddataComponent implements OnInit {

  fetch(cb) {
    const req = new XMLHttpRequest();
    req.open('GET', `assets/data/sample.json`);

    req.onload = () => {
      cb(JSON.parse(req.response));
    };

    req.send();

  }

  ngOnInit(): void {
    // generate random values for mainChart
    this.fetch(data => {
      localStorage.setItem('accountList', JSON.stringify(data));
    });
  }
}
