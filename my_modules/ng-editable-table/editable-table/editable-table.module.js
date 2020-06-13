import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EditableTableComponent } from './editable-table.component';
import { EditableTableService } from './editable-table.service';
export var EditableTableModule = (function () {
    function EditableTableModule() {
    }
    EditableTableModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        FormsModule
                    ],
                    declarations: [
                        EditableTableComponent,
                    ],
                    providers: [EditableTableService],
                    exports: [EditableTableComponent],
                },] },
    ];
    /** @nocollapse */
    EditableTableModule.ctorParameters = function () { return []; };
    return EditableTableModule;
}());
//# sourceMappingURL=editable-table.module.js.map
