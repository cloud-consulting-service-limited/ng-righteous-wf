import { Component, Input, Output, EventEmitter } from '@angular/core';
import { EditableTableService } from './editable-table.service';
export var EditableTableComponent = (function () {
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
        this.onSave = new EventEmitter();
        this.onRemove = new EventEmitter();
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
    EditableTableComponent.decorators = [
        { type: Component, args: [{
                    selector: 'nv-editable-table',
                    template: "\n          <table class=\"{{class}}\">\n              <thead>\n                <tr>\n                  <th *ngFor=\"let title of service.tableHeadersObjects\">{{title.content}}</th>\n                  <th *ngIf=\"canEditRows||canDeleteRows\"></th>\n                </tr>\n              </thead>\n              <tbody>\n                <tr class=\"{{trClass}}\" *ngFor=\"let row of service.tableRowsObjects\">\n                  <td class=\"{{tdClass}}\" *ngFor=\"let cell of row.cells\">\n                    <span *ngIf=\"service.isEditing.indexOf(row) === -1 && checkTypeOf(cell.content) !== 'boolean'\">{{cell.content}}</span>\n                    <span *ngIf=\"service.isEditing.indexOf(row) === -1 && checkTypeOf(cell.content) == 'boolean'\">\n                      {{cell.content ? 'Activo' : 'Inactivo'}}\n                    </span>\n                    <div class=\"ui input\" *ngIf=\"!(service.isEditing.indexOf(row) == -1) && checkTypeOf(cell.content) !== 'boolean' \n                     && !isRequired\">\n                      <input type=\"text\" [(ngModel)]=\"cell.content\" [name]=\"cell.content\">\n                    </div>\n                    <div class=\"ui input requiredInput\" [ngClass]=\"{errorClass: !cell.content && cell.touched}\" *ngIf=\"!(service.isEditing.indexOf(row) == -1) && checkTypeOf(cell.content) !== 'boolean' && isRequired\">\n                      <input type=\"text\" [(ngModel)]=\"cell.content\" [name]=\"cell.content\" #[cell.content]=\"ngModel\" required />\n                        <div [ngClass]=\"{'show': !cell.content && cell.touched, \n                                  'hide': cell.content}\" class=\"divmessage\" style=\"Color: red;\" [hidden]=\"cell.content\">\n                              <div>{{requiredMessage}}</div>\n                          </div>\n                        </div>\n        <div *ngIf=\"!(service.isEditing.indexOf(row) == -1) && checkTypeOf(cell.content) === 'boolean'\" class=\"field checkboxContainer\">\n            <div class=\"ui toggle checkbox\">\n                <input type=\"checkbox\" name=\"public\" [(ngModel)]=\"cell.content\" name=\"active\">\n                <label>{{cell.content ? 'Activo' : 'Inactivo'}}</label>\n            </div>\n        </div>\n                  </td>\n                  <td class={{buttonsTdClass}} *ngIf=\"canEditRows||canDeleteRows\">\n                    <button class={{editButtonClass}} *ngIf=\"service.isEditing.indexOf(row) === -1 && canEditRows\" (click)=\"editRow(row)\">\n                      <i class=\"{{editIcon}}\"></i>{{editButtonLabel}}\n                    </button>\n                    <button class={{editButtonClass}} *ngIf=\"!(service.isEditing.indexOf(row) == -1) && canEditRows\" \n                      (click)=\"saveRow(row)\">\n                      <i class=\"{{saveIcon}}\"></i>{{saveButtonLabel}}\n                    </button>\n                    <button class={{deleteButtonClass}} *ngIf=\"canDeleteRows && service.isEditing.indexOf(row) === -1\" \n                    (click)=\"deleteRow(row)\">\n                      <i class=\"{{deleteIcon}}\"></i>{{deleteButtonLabel}}\n                    </button>\n                    <button class={{deleteButtonClass}} *ngIf=\"!(service.isEditing.indexOf(row) == -1) && canEditRows\"\n                     (click)=\"deleteRow(row)\">\n                      <i class=\"{{deleteIcon}}\"></i>{{cancelButtonLabel}}\n                    </button>\n                  </td>\n                </tr>\n              </tbody>\n              <tfoot>\n                <tr>\n                  <th *ngFor=\"let title of service.tableHeadersObjects\"></th>\n                  <th *ngIf=\"canEditRows||canDeleteRows\">\n                      <button class={{addButtonClass}} (click)=\"addRow()\" *ngIf=\"canAddRows\">\n                          <i class=\"{{addIcon}}\"></i>{{addButtonLabel}}\n                      </button>\n                  </th>\n                </tr>\n              </tfoot>\n            </table>\n  ",
                    styles: ["tfoot{text-align: right;} \n  .myerror{color:red} \n  .requiredInput.divmessage{display:none} \n  .requiredInput.divmessage.show{display:block !important} \n  .requiredInput.divmessage.hide{display:none}"],
                    providers: [EditableTableService]
                },] },
    ];
    /** @nocollapse */
    EditableTableComponent.ctorParameters = function () { return [
        { type: EditableTableService, },
    ]; };
    EditableTableComponent.propDecorators = {
        'tableHeaders': [{ type: Input, args: ['table-headers',] },],
        'tableRows': [{ type: Input, args: ['table-rows',] },],
        'tableRowsWithId': [{ type: Input, args: ['table-rows-with-id',] },],
        'canDeleteRows': [{ type: Input, args: ['can-delete-rows',] },],
        'canEditRows': [{ type: Input, args: ['can-edit-rows',] },],
        'canAddRows': [{ type: Input, args: ['can-add-rows',] },],
        'addButtonLabel': [{ type: Input, args: ['add-button-label',] },],
        'editButtonLabel': [{ type: Input, args: ['edit-button-label',] },],
        'saveButtonLabel': [{ type: Input, args: ['save-button-label',] },],
        'cancelButtonLabel': [{ type: Input, args: ['cancel-button-label',] },],
        'deleteButtonLabel': [{ type: Input, args: ['delete-button-label',] },],
        'addIcon': [{ type: Input, args: ['add-icon',] },],
        'editIcon': [{ type: Input, args: ['edit-icon',] },],
        'saveIcon': [{ type: Input, args: ['save-icon',] },],
        'deleteIcon': [{ type: Input, args: ['delete-icon',] },],
        'addButtonClass': [{ type: Input, args: ['add-button-class',] },],
        'editButtonClass': [{ type: Input, args: ['edit-button-class',] },],
        'deleteButtonClass': [{ type: Input, args: ['delete-button-class',] },],
        'trClass': [{ type: Input, args: ['tr-class',] },],
        'tdClass': [{ type: Input, args: ['td-class',] },],
        'buttonsTdClass': [{ type: Input, args: ['buttons-td-class',] },],
        'class': [{ type: Input, args: ['class',] },],
        'dataType': [{ type: Input, args: ['data-type',] },],
        'errorClass': [{ type: Input },],
        'isRequired': [{ type: Input },],
        'requiredMessage': [{ type: Input },],
        'onSave': [{ type: Output },],
        'onRemove': [{ type: Output },],
    };
    return EditableTableComponent;
}());
//# sourceMappingURL=editable-table.component.js.map