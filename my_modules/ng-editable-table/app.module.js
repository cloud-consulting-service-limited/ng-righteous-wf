import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EditableTableModule } from './editable-table/editable-table.module';
import { TestingComponent } from './testing/testing.component';
export var AppModule = (function () {
    function AppModule() {
    }
    AppModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        FormsModule,
                        EditableTableModule
                    ],
                    declarations: [
                        TestingComponent
                    ],
                    bootstrap: [TestingComponent]
                },] },
    ];
    /** @nocollapse */
    AppModule.ctorParameters = function () { return []; };
    return AppModule;
}());
//# sourceMappingURL=app.module.js.map
