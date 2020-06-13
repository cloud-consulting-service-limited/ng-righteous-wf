import { Injectable } from '@angular/core';
import { TableRow } from '../util/table-row';
import { TableCell } from '../util/table-cell';
export var EditableTableService = (function () {
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
                    tableCells.push(new TableCell(cell));
                }
                this.tableRowsObjects.push(new TableRow(tableCells));
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
                    tableCells.push(new TableCell(row[i]));
                }
                this.tableRowsObjects.push(new TableRow(tableCells, row[0]));
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
                    newCells.push(new TableCell(false));
                    break;
                default:
                    newCells.push(new TableCell(''));
            }
        }
        this.tableRowsObjects.push(newRow = new TableRow(newCells));
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
            this.tableHeadersObjects.push(new TableCell(obj));
            this.dataType = dataType;
        }
    };
    EditableTableService.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    EditableTableService.ctorParameters = function () { return []; };
    return EditableTableService;
}());
//# sourceMappingURL=editable-table.service.js.map