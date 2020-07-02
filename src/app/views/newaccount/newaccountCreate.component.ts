import { Component, OnInit } from '@angular/core';
import { getStyle, hexToRgba } from '@coreui/coreui/dist/js/coreui-utilities';
import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips';
import {Observable} from 'rxjs';
import {debounceTime, distinctUntilChanged, map} from 'rxjs/operators';
import { ActivatedRoute, Route, ActivatedRouteSnapshot, UrlSegment, Params, Data } from '@angular/router';




@Component({
  templateUrl: 'newaccountCreate.component.html',
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
export class NewaccountCreateComponent implements OnInit {
  tableHeaders = [{"name":"Name","prop":"Name"}, {"name":"Option","prop":"Option"}, {"name":"Appointed On", "prop":"Appointed On"}, {"name":"Resigned On", "prop":"Resigned On"},{"name":"Salary", "prop":"Salary"}, {"name":"MPF","prop":"MPF"}];
  tableHeadersSub = [{"name":"Name of sub","prop":"Name of sub"},{"name":"Place of sub","prop":"Place of sub"},{"name":"% of holding sub","prop":"% of holding sub"}, {"name":"Activity of sub","prop":"Activity of sub"}];
  tableHeadersAsso = [{"name":"Name of asso","prop":"Name of asso"},{"name":"Place of asso","prop":"Place of asso"},{"name":"% of holding asso","prop":"% of holding asso"}, {"name":"Activity of asso","prop":"Activity of asso"}];
  tableHeadersShareHolder = [{"name":"Name","prop":"Name"}, {"name":"CY","prop":"CY"},{"name":"LY","prop":"LY"}];
  tableHeadersAmoutdueCo = [{"name":"Name","prop":"Name"}, {"name":"CY","prop":"CY"},{"name":"LY","prop":"LY"}];
  tableHeadersAmoutdueSub = [{"name":"Name","prop":"Name"}, {"name":"CY","prop":"CY"},{"name":"LY","prop":"LY"}];

  tableRows = [];
  tableRowsSub = [];
  tableRowsAsso = [];
  tableRowsShareHolder = [];
  tableRowsAmoutdueCo = [];
  tableRowsAmoutdueSub = [];

  editing ={}
  editingSub ={}
  editingAsso ={}
  editingShareHolder ={}
  editingAmoutdueCo ={}
  editingAmoutdueSub ={}
  accountDetail = {}

  constructor(
    private route: ActivatedRoute,
  ) {
    console.log("contructing NewaccountCreateComponent")
  }

  id: string;
   
  add() {
    let temp = [...this.tableRows];
    temp.push( {"Name": "Double Click to Edit","Option": "Double Click to Edit","Appointed On": "Double Click to Edit","Resigned On": "Double Click to Edit", "Salary":"Double Click to Edit", "MPF":"Double Click to Edit"});
    this.tableRows = temp;
  }

  deleteRow(rowIndex) {
    let temp = [...this.tableRows];
    temp.splice(rowIndex, 1);
    this.tableRows = temp;
  }

  addSub() {
    let temp = [...this.tableRowsSub];
    temp.push( {"Name of sub": "Double Click to Edit","Place of sub": "Double Click to Edit","% of holding sub": "Double Click to Edit","Activity of sub": "Double Click to Edit"});
    this.tableRowsSub = temp;
  }

  deleteRowSub(rowIndex) {
    let temp = [...this.tableRowsSub];
    temp.splice(rowIndex, 1);
    this.tableRowsSub = temp;
  }

  addAsso() {
    let temp = [...this.tableRowsAsso];
    temp.push( {"Name of asso": "Double Click to Edit","Place of asso": "Double Click to Edit","% of holding asso": "Double Click to Edit","Activity of asso": "Double Click to Edit"});
    this.tableRowsAsso = temp;
  }

  deleteRowAsso(rowIndex) {
    let temp = [...this.tableRowsAsso];
    temp.splice(rowIndex, 1);
    this.tableRowsAsso = temp;
  }

  addShareHolder() {
    let temp = [...this.tableRowsShareHolder];
    temp.push( {"Name": "Double Click to Edit","CY": "Double Click to Edit","LY": "Double Click to Edit"});
    this.tableRowsShareHolder = temp;
  }

  deleteRowShareHolder(rowIndex) {
    let temp = [...this.tableRowsShareHolder];
    temp.splice(rowIndex, 1);
    this.tableRowsShareHolder = temp;
  }

  addAmoutdueCo() {
    let temp = [...this.tableRowsAmoutdueCo];
    temp.push( {"Name": "Double Click to Edit","CY": "Double Click to Edit","LY": "Double Click to Edit"});
    this.tableRowsAmoutdueCo = temp;
  }

  deleteRowAmoutdueCo(rowIndex) {
    let temp = [...this.tableRowsAmoutdueCo];
    temp.splice(rowIndex, 1);
    this.tableRowsAmoutdueCo = temp;
  }

  addAmoutdueSub() {
    let temp = [...this.tableRowsAmoutdueSub];
    temp.push( {"Name": "Double Click to Edit","CY": "Double Click to Edit","LY": "Double Click to Edit"});
    this.tableRowsAmoutdueSub= temp;
  }

  deleteRowAmoutdueSub(rowIndex) {
    let temp = [...this.tableRowsAmoutdueSub];
    temp.splice(rowIndex, 1);
    this.tableRowsAmoutdueSub = temp;
  }

  updateValue(event, cell, rowIndex) {
    this.editing[rowIndex + '-' + cell] = false;
    this.tableRows[rowIndex][cell] = event.target.value;
    this.tableRows = [...this.tableRows];
  }

  editCell(cell, rowIndex) {
    this.editing = {};
    this.editing[rowIndex + '-' + cell] = true;
  }

  updateValueSub(event, cell, rowIndex) {
    this.editingSub[rowIndex + '-' + cell] = false;
    this.tableRowsSub[rowIndex][cell] = event.target.value;
    this.tableRowsSub = [...this.tableRowsSub];
  }

  editCellSub(cell, rowIndex) {
    this.editingSub = {};
    this.editingSub[rowIndex + '-' + cell] = true;
  }

  updateValueAsso(event, cell, rowIndex) {
    this.editingAsso[rowIndex + '-' + cell] = false;
    this.tableRowsAsso[rowIndex][cell] = event.target.value;
    this.tableRowsAsso = [...this.tableRowsAsso];
  }

  editCellAsso(cell, rowIndex) {
    this.editingAsso = {};
    this.editingAsso[rowIndex + '-' + cell] = true;
  }

  updateValueShareHolder(event, cell, rowIndex) {
    this.editingShareHolder[rowIndex + '-' + cell] = false;
    this.tableRowsShareHolder[rowIndex][cell] = event.target.value;
    this.tableRowsShareHolder = [...this.tableRowsShareHolder];
  }

  editCellShareHolder(cell, rowIndex) {
    this.editingShareHolder = {};
    this.editingShareHolder[rowIndex + '-' + cell] = true;
  }

  updateValueAmoutdueCo(event, cell, rowIndex) {
    this.editingAmoutdueCo[rowIndex + '-' + cell] = false;
    this.tableRowsAmoutdueCo[rowIndex][cell] = event.target.value;
    this.tableRowsAmoutdueCo = [...this.tableRowsAmoutdueCo];
  }

  editCellAmoutdueCo(cell, rowIndex) {
    this.editingAmoutdueCo = {};
    this.editingAmoutdueCo[rowIndex + '-' + cell] = true;
  }

  updateValueAmoutdueSub(event, cell, rowIndex) {
    this.editingAmoutdueSub[rowIndex + '-' + cell] = false;
    this.tableRowsAmoutdueSub[rowIndex][cell] = event.target.value;
    this.tableRowsAmoutdueSub = [...this.tableRowsAmoutdueSub];
  }

  editCellAmoutdueSub(cell, rowIndex) {
    this.editingAmoutdueSub = {};
    this.editingAmoutdueSub[rowIndex + '-' + cell] = true;
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
       if (this.accountInfo['detail']) {
           this.accountDetail = this.accountInfo['detail'];
       }
    });
  }

}
