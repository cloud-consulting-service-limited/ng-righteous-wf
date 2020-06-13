import { Component } from '@angular/core';
import { EditableTableService } from '../editable-table/editable-table.service';
export var TestingComponent = (function () {
    function TestingComponent(service) {
        this.service = service;
        this.tableHeaders = ['Header 1', 'Header 2', 'Header 3'];
        this.tableRowsWithId = [
            [1, 'Header 1', 'Header 2', true],
            [2, 'Header 1', 'Header 2', true]
        ];
        this.dataType = ['string', 'string', 'boolean'];
    }
    TestingComponent.prototype.ngOnInit = function () {
        this.service.createTableWithIds(this.tableHeaders, this.tableRowsWithId, this.dataType);
    };
    TestingComponent.prototype.onRemove = function (row) {
        console.log(row);
    };
    TestingComponent.decorators = [
        { type: Component, args: [{
                    selector: 'nv-testing',
                    templateUrl: './testing.component.html',
                    styleUrls: ['./testing.component.css']
                },] },
    ];
    /** @nocollapse */
    TestingComponent.ctorParameters = function () { return [
        { type: EditableTableService, },
    ]; };
    return TestingComponent;
}());
//# sourceMappingURL=testing.component.js.map