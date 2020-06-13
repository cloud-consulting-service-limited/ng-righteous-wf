import { Component, OnInit } from '@angular/core';
import { getStyle, hexToRgba } from '@coreui/coreui/dist/js/coreui-utilities';
import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips';
import { ColumnMode } from '@swimlane/ngx-datatable';


@Component({
  templateUrl: 'jobs.component.html'
})
export class JobsComponent implements OnInit {

  editing = {};
  rows = [];
  labels = [{"name": "Name", "prop":"name"},{"name":"Gender","prop":"gender"}, {"name":"Age","prop":"age"}];

  ColumnMode = ColumnMode;

  constructor() {
    this.fetch(data => {
      this.rows = data;
    });
  }

  fetch(cb) {
    const req = new XMLHttpRequest();
    req.open('GET', `assets/data/company.json`);

    req.onload = () => {
      cb(JSON.parse(req.response));
    };

    req.send();
  }

  // call to update cell value
  updateValue(event, cell, rowIndex) {
    this.editing[rowIndex + '-' + cell] = false;
    this.rows[rowIndex][cell] = event.target.value;
    this.rows = [...this.rows];
  }

  // call on double click in cell
  editCell(cell, rowIndex) {
    this.editing = {};
    this.editing[rowIndex + '-' + cell] = true;
  } 

//  updateValue(event, cell, rowIndex) {
//    console.log('inline editing rowIndex', rowIndex);
//    this.editing[rowIndex + '-' + cell] = false;
//    this.rows[rowIndex][cell] = event.target.value;
//    this.rows = [...this.rows];
//    console.log('UPDATED!', this.rows[rowIndex][cell]);
//  }

  add() {
    let temp = [...this.rows];
    temp.push(
  {
    "name": "Double Click to Edit",
    "gender": "Double Click to Edit",
    "company": "Double Click to Edit",
    "age": "Double Click to Edit"
  }
);
    this.rows = temp;
  }

  deleteRow(rowIndex) {
    let temp = [...this.rows];
    temp.splice(rowIndex, 1);
    this.rows = temp;
  }

  ngOnInit(): void {
    // generate random values for mainChart
  }
}
