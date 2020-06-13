(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("@angular/core"), require("@angular/common"), require("@angular/forms"), require("@angular/platform-browser"));
	else if(typeof define === 'function' && define.amd)
		define(["@angular/core", "@angular/common", "@angular/forms", "@angular/platform-browser"], factory);
	else if(typeof exports === 'object')
		exports["ng-editable-table.umd"] = factory(require("@angular/core"), require("@angular/common"), require("@angular/forms"), require("@angular/platform-browser"));
	else
		root["ng-editable-table.umd"] = factory(root["@angular/core"], root["@angular/common"], root["@angular/forms"], root["@angular/platform-browser"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_6__, __WEBPACK_EXTERNAL_MODULE_7__, __WEBPACK_EXTERNAL_MODULE_8__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 9);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util_table_row__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__util_table_cell__ = __webpack_require__(3);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditableTableService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EditableTableService = (function () {
    function EditableTableService() {
        this.tableHeadersObjects = [];
        this.tableRowsObjects = [];
        this.dataType = [];
        this.isEditing = [];
    }
    EditableTableService.prototype.createTable = function (headers, content, dataType) {
        this.createHeaders(headers, dataType);
        var tableCells = [];
        if (content.length > 0) {
            for (var _i = 0, content_1 = content; _i < content_1.length; _i++) {
                var row = content_1[_i];
                for (var _a = 0, row_1 = row; _a < row_1.length; _a++) {
                    var cell = row_1[_a];
                    tableCells.push(new __WEBPACK_IMPORTED_MODULE_2__util_table_cell__["a" /* TableCell */](cell));
                }
                this.tableRowsObjects.push(new __WEBPACK_IMPORTED_MODULE_1__util_table_row__["a" /* TableRow */](tableCells));
                tableCells = [];
            }
        }
    };
    EditableTableService.prototype.createTableWithIds = function (headers, content, dataType) {
        this.createHeaders(headers, dataType);
        var tableCells = [];
        if (content.length > 0) {
            for (var _i = 0, content_2 = content; _i < content_2.length; _i++) {
                var row = content_2[_i];
                for (var i = 1; i < row.length; i++) {
                    tableCells.push(new __WEBPACK_IMPORTED_MODULE_2__util_table_cell__["a" /* TableCell */](row[i]));
                }
                this.tableRowsObjects.push(new __WEBPACK_IMPORTED_MODULE_1__util_table_row__["a" /* TableRow */](tableCells, row[0]));
                tableCells = [];
            }
        }
    };
    EditableTableService.prototype.addRow = function () {
        var newCells = [];
        var newRow;
        for (var i = 0; i < this.tableHeadersObjects.length; i++) {
            switch (this.dataType[i]) {
                case 'boolean':
                    newCells.push(new __WEBPACK_IMPORTED_MODULE_2__util_table_cell__["a" /* TableCell */](false));
                    break;
                default:
                    newCells.push(new __WEBPACK_IMPORTED_MODULE_2__util_table_cell__["a" /* TableCell */](''));
            }
        }
        this.tableRowsObjects.push(newRow = new __WEBPACK_IMPORTED_MODULE_1__util_table_row__["a" /* TableRow */](newCells));
        this.isEditing.push(newRow);
    };
    EditableTableService.prototype.editRow = function (selectedRow) {
        this.isEditing.push(selectedRow);
    };
    EditableTableService.prototype.saveRow = function (selectedRow) {
        this.isEditing = this.isEditing.filter(function (temporalRow) { return temporalRow !== selectedRow; });
    };
    EditableTableService.prototype.cancelEdition = function (selectedRow) {
        this.isEditing = this.isEditing.filter(function (temporalRow) { return temporalRow !== selectedRow; });
        this.tableRowsObjects = this.tableRowsObjects.filter(function (temporalRow) { return temporalRow !== selectedRow; });
    };
    EditableTableService.prototype.deleteRow = function (selectedRow) {
        this.isEditing = this.isEditing.filter(function (temporalRow) { return temporalRow !== selectedRow; });
        this.tableRowsObjects = this.tableRowsObjects.filter(function (temporalRow) { return temporalRow !== selectedRow; });
    };
    EditableTableService.prototype.checkTypeOf = function (value) {
        if (typeof (value) === 'boolean') {
            return 'boolean';
        }
        return '';
    };
    EditableTableService.prototype.createHeaders = function (headers, dataType) {
        for (var _i = 0, headers_1 = headers; _i < headers_1.length; _i++) {
            var obj = headers_1[_i];
            this.tableHeadersObjects.push(new __WEBPACK_IMPORTED_MODULE_2__util_table_cell__["a" /* TableCell */](obj));
            this.dataType = dataType;
        }
    };
    EditableTableService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [])
    ], EditableTableService);
    return EditableTableService;
}());


/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__editable_table_service__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditableTableComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EditableTableComponent = (function () {
    function EditableTableComponent(service) {
        this.tableHeaders = [];
        this.tableRows = [];
        this.tableRowsWithId = [];
        this.canDeleteRows = true;
        this.canEditRows = true;
        this.canAddRows = true;
        this.addIcon = 'fa fa-plus';
        this.editIcon = 'fa fa-pencil-square-o';
        this.saveIcon = 'fa fa-check';
        this.deleteIcon = 'fa fa-times';
        this.dataType = [];
        this.errorClass = 'myerror';
        this.isRequired = true;
        this.requiredMessage = 'Campo Requerido';
        this.onSave = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.onRemove = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.service = service;
    }
    EditableTableComponent.prototype.ngOnInit = function () {
        if (this.tableRows.length > 0 || (this.tableRows !== undefined && this.tableRowsWithId.length === 0)) {
            this.service.createTable(this.tableHeaders, this.tableRows, this.dataType);
        }
        else if (this.tableRowsWithId.length > 0 || (this.tableRowsWithId !== undefined && this.tableRows.length === 0)) {
            this.service.createTableWithIds(this.tableHeaders, this.tableRowsWithId, this.dataType);
        }
    };
    EditableTableComponent.prototype.addRow = function () {
        this.service.addRow();
    };
    EditableTableComponent.prototype.editRow = function (selectedRow) {
        this.service.editRow(selectedRow);
    };
    EditableTableComponent.prototype.cancelEdition = function (selectedRow) {
        this.service.cancelEdition(selectedRow);
    };
    EditableTableComponent.prototype.saveRow = function (selectedRow) {
        for (var _i = 0, _a = selectedRow.cells; _i < _a.length; _i++) {
            var cell = _a[_i];
            if (cell.content == null || cell.content === '') {
                return;
            }
        }
        this.service.saveRow(selectedRow);
        var dir = [];
        for (var i = 0; i < selectedRow.cells.length; i++) {
            dir.push(selectedRow.cells[i].content);
        }
        var obj = { id: selectedRow.id, cells: dir };
        this.onSave.emit(obj);
    };
    EditableTableComponent.prototype.deleteRow = function (selectedRow) {
        this.service.deleteRow(selectedRow);
        var dir = [];
        for (var i = 0; i < selectedRow.cells.length; i++) {
            dir.push(selectedRow.cells[i].content);
        }
        var obj = { id: selectedRow.id, cells: dir };
        this.onRemove.emit(obj);
    };
    EditableTableComponent.prototype.checkTypeOf = function (value) {
        if (typeof (value) === 'boolean') {
            return 'boolean';
        }
        return '';
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('table-headers'), 
        __metadata('design:type', Array)
    ], EditableTableComponent.prototype, "tableHeaders", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('table-rows'), 
        __metadata('design:type', Array)
    ], EditableTableComponent.prototype, "tableRows", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('table-rows-with-id'), 
        __metadata('design:type', Array)
    ], EditableTableComponent.prototype, "tableRowsWithId", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('can-delete-rows'), 
        __metadata('design:type', Object)
    ], EditableTableComponent.prototype, "canDeleteRows", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('can-edit-rows'), 
        __metadata('design:type', Object)
    ], EditableTableComponent.prototype, "canEditRows", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('can-add-rows'), 
        __metadata('design:type', Object)
    ], EditableTableComponent.prototype, "canAddRows", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('add-button-label'), 
        __metadata('design:type', String)
    ], EditableTableComponent.prototype, "addButtonLabel", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('edit-button-label'), 
        __metadata('design:type', String)
    ], EditableTableComponent.prototype, "editButtonLabel", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('save-button-label'), 
        __metadata('design:type', String)
    ], EditableTableComponent.prototype, "saveButtonLabel", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('cancel-button-label'), 
        __metadata('design:type', String)
    ], EditableTableComponent.prototype, "cancelButtonLabel", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('delete-button-label'), 
        __metadata('design:type', String)
    ], EditableTableComponent.prototype, "deleteButtonLabel", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('add-icon'), 
        __metadata('design:type', Object)
    ], EditableTableComponent.prototype, "addIcon", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('edit-icon'), 
        __metadata('design:type', Object)
    ], EditableTableComponent.prototype, "editIcon", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('save-icon'), 
        __metadata('design:type', Object)
    ], EditableTableComponent.prototype, "saveIcon", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('delete-icon'), 
        __metadata('design:type', Object)
    ], EditableTableComponent.prototype, "deleteIcon", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('add-button-class'), 
        __metadata('design:type', String)
    ], EditableTableComponent.prototype, "addButtonClass", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('edit-button-class'), 
        __metadata('design:type', String)
    ], EditableTableComponent.prototype, "editButtonClass", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('delete-button-class'), 
        __metadata('design:type', String)
    ], EditableTableComponent.prototype, "deleteButtonClass", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('tr-class'), 
        __metadata('design:type', String)
    ], EditableTableComponent.prototype, "trClass", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('td-class'), 
        __metadata('design:type', String)
    ], EditableTableComponent.prototype, "tdClass", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('buttons-td-class'), 
        __metadata('design:type', String)
    ], EditableTableComponent.prototype, "buttonsTdClass", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('class'), 
        __metadata('design:type', String)
    ], EditableTableComponent.prototype, "class", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('data-type'), 
        __metadata('design:type', Object)
    ], EditableTableComponent.prototype, "dataType", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Object)
    ], EditableTableComponent.prototype, "errorClass", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Object)
    ], EditableTableComponent.prototype, "isRequired", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Object)
    ], EditableTableComponent.prototype, "requiredMessage", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(), 
        __metadata('design:type', Object)
    ], EditableTableComponent.prototype, "onSave", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(), 
        __metadata('design:type', Object)
    ], EditableTableComponent.prototype, "onRemove", void 0);
    EditableTableComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'nv-editable-table',
            template: "\n          <table class=\"{{class}}\">\n              <thead>\n                <tr>\n                  <th *ngFor=\"let title of service.tableHeadersObjects\">{{title.content}}</th>\n                  <th *ngIf=\"canEditRows||canDeleteRows\"></th>\n                </tr>\n              </thead>\n              <tbody>\n                <tr class=\"{{trClass}}\" *ngFor=\"let row of service.tableRowsObjects\">\n                  <td class=\"{{tdClass}}\" *ngFor=\"let cell of row.cells\">\n                    <span *ngIf=\"service.isEditing.indexOf(row) === -1 && checkTypeOf(cell.content) !== 'boolean'\">{{cell.content}}</span>\n                    <span *ngIf=\"service.isEditing.indexOf(row) === -1 && checkTypeOf(cell.content) == 'boolean'\">\n                      {{cell.content ? 'Activo' : 'Inactivo'}}\n                    </span>\n                    <div class=\"ui input\" *ngIf=\"!(service.isEditing.indexOf(row) == -1) && checkTypeOf(cell.content) !== 'boolean' \n                     && !isRequired\">\n                      <input type=\"text\" [(ngModel)]=\"cell.content\" [name]=\"cell.content\">\n                    </div>\n                    <div class=\"ui input requiredInput\" [ngClass]=\"{errorClass: !cell.content && cell.touched}\" *ngIf=\"!(service.isEditing.indexOf(row) == -1) && checkTypeOf(cell.content) !== 'boolean' && isRequired\">\n                      <input type=\"text\" [(ngModel)]=\"cell.content\" [name]=\"cell.content\" #[cell.content]=\"ngModel\" required />\n                        <div [ngClass]=\"{'show': !cell.content && cell.touched, \n                                  'hide': cell.content}\" class=\"divmessage\" style=\"Color: red;\" [hidden]=\"cell.content\">\n                              <div>{{requiredMessage}}</div>\n                          </div>\n                        </div>\n        <div *ngIf=\"!(service.isEditing.indexOf(row) == -1) && checkTypeOf(cell.content) === 'boolean'\" class=\"field checkboxContainer\">\n            <div class=\"ui toggle checkbox\">\n                <input type=\"checkbox\" name=\"public\" [(ngModel)]=\"cell.content\" name=\"active\">\n                <label>{{cell.content ? 'Activo' : 'Inactivo'}}</label>\n            </div>\n        </div>\n                  </td>\n                  <td class={{buttonsTdClass}} *ngIf=\"canEditRows||canDeleteRows\">\n                    <button class={{editButtonClass}} *ngIf=\"service.isEditing.indexOf(row) === -1 && canEditRows\" (click)=\"editRow(row)\">\n                      <i class=\"{{editIcon}}\"></i>{{editButtonLabel}}\n                    </button>\n                    <button class={{editButtonClass}} *ngIf=\"!(service.isEditing.indexOf(row) == -1) && canEditRows\" \n                      (click)=\"saveRow(row)\">\n                      <i class=\"{{saveIcon}}\"></i>{{saveButtonLabel}}\n                    </button>\n                    <button class={{deleteButtonClass}} *ngIf=\"canDeleteRows && service.isEditing.indexOf(row) === -1\" \n                    (click)=\"deleteRow(row)\">\n                      <i class=\"{{deleteIcon}}\"></i>{{deleteButtonLabel}}\n                    </button>\n                    <button class={{deleteButtonClass}} *ngIf=\"!(service.isEditing.indexOf(row) == -1) && canEditRows\"\n                     (click)=\"deleteRow(row)\">\n                      <i class=\"{{deleteIcon}}\"></i>{{cancelButtonLabel}}\n                    </button>\n                  </td>\n                </tr>\n              </tbody>\n              <tfoot>\n                <tr>\n                  <th *ngFor=\"let title of service.tableHeadersObjects\"></th>\n                  <th *ngIf=\"canEditRows||canDeleteRows\">\n                      <button class={{addButtonClass}} (click)=\"addRow()\" *ngIf=\"canAddRows\">\n                          <i class=\"{{addIcon}}\"></i>{{addButtonLabel}}\n                      </button>\n                  </th>\n                </tr>\n              </tfoot>\n            </table>\n  ",
            styles: ["tfoot{text-align: right;} \n  .myerror{color:red} \n  .requiredInput.divmessage{display:none} \n  .requiredInput.divmessage.show{display:block !important} \n  .requiredInput.divmessage.hide{display:none}"],
            providers: [__WEBPACK_IMPORTED_MODULE_1__editable_table_service__["a" /* EditableTableService */]]
        }), 
        __metadata('design:paramtypes', [__WEBPACK_IMPORTED_MODULE_1__editable_table_service__["a" /* EditableTableService */]])
    ], EditableTableComponent);
    return EditableTableComponent;
}());


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TableCell; });
var TableCell = (function () {
    function TableCell(content) {
        this.content = content;
    }
    return TableCell;
}());


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TableRow; });
var TableRow = (function () {
    function TableRow(cells, id) {
        this.cells = cells;
        this.id = id;
    }
    return TableRow;
}());


/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__angular_common__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__angular_forms__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__editable_table_component__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__editable_table_service__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditableTableModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var EditableTableModule = (function () {
    function EditableTableModule() {
    }
    EditableTableModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["BrowserModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormsModule"]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__editable_table_component__["a" /* EditableTableComponent */],
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_5__editable_table_service__["a" /* EditableTableService */]],
            exports: [__WEBPACK_IMPORTED_MODULE_4__editable_table_component__["a" /* EditableTableComponent */]],
        }), 
        __metadata('design:paramtypes', [])
    ], EditableTableModule);
    return EditableTableModule;
}());


/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_6__;

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_7__;

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_8__;

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__editable_table_editable_table_service__ = __webpack_require__(0);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "EditableTableService", function() { return __WEBPACK_IMPORTED_MODULE_0__editable_table_editable_table_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__editable_table_editable_table_component__ = __webpack_require__(2);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "EditableTableComponent", function() { return __WEBPACK_IMPORTED_MODULE_1__editable_table_editable_table_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__editable_table_editable_table_module__ = __webpack_require__(5);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "EditableTableModule", function() { return __WEBPACK_IMPORTED_MODULE_2__editable_table_editable_table_module__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__util_table_cell__ = __webpack_require__(3);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "TableCell", function() { return __WEBPACK_IMPORTED_MODULE_3__util_table_cell__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__util_table_row__ = __webpack_require__(4);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "TableRow", function() { return __WEBPACK_IMPORTED_MODULE_4__util_table_row__["a"]; });







/***/ })
/******/ ]);
});
//# sourceMappingURL=ng-editable-table.umd.js.map