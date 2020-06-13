import { async, TestBed, ComponentFixtureAutoDetect } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditableTableComponent } from './editable-table.component';
describe('EditableTableComponent', function () {
    var component;
    var fixture;
    var tableDebugElement;
    var addRowButtonDebugElement;
    var table;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [EditableTableComponent],
            imports: [ReactiveFormsModule, FormsModule],
            providers: [
                { provide: ComponentFixtureAutoDetect, useValue: true }
            ]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(EditableTableComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
        tableDebugElement = fixture.debugElement.query(By.css('table'));
        addRowButtonDebugElement = fixture.debugElement.query(By.css('button'));
        table = tableDebugElement.nativeElement;
    });
    /* it('should create', () => {
       expect(component).toBeTruthy();
     });
   
     it('should have table headers strings', () => {
       const tableHeaders = ['Header 1', 'Header 2', 'Header 3'];
   
       component.tableHeaders = tableHeaders;
   
       expect(component.tableHeaders).toBe(tableHeaders);
     });
   
     it('should have table rows strings', () => {
       const tableRows = [
         ['Cell', 'Cell', 'Cell'],
         ['Cell', 'Cell', 'Cell'],
         ['Cell', 'Cell', 'Cell']
       ];
   
       component.tableRows = tableRows;
   
       expect(component.tableRows).toBe(tableRows);
     });
   
     it('should create a table with thead and thbody', () => {
       expect(table.hasChildNodes).toBeTruthy();
     });
   
     it('function addRow() should add a new row', () => {
       component.addRow();
       expect(component.tableRowsObjects.length).toBe(1);
     });
   
     it('function addRow() should add a new row and enable editing', () => {
       component.addRow();
       expect(component.isEditing.length).toBe(1);
     });
   
     it('function editRow() should add to isEditing array the first row', () => {
       const tableRows = [
         ['Cell', 'Cell', 'Cell'],
         ['Cell', 'Cell', 'Cell'],
         ['Cell', 'Cell', 'Cell']
       ];
   
       const tableHeaders = ['Header 1', 'Header 2', 'Header 3'];
   
       component.tableHeaders = tableHeaders;
   
       component.tableRows = tableRows;
       component.editRow(component.tableRowsObjects[0]);
       expect(component.isEditing.length).toBe(1);
       expect(component.isEditing[0]).toBe(component.tableRowsObjects[0]);
     });
   
     it('function deleteRow() should remove of isEditing array and rows array the first row', () => {
       const tableRows = [
         ['Cell', 'Cell', 'Cell'],
         ['Cell', 'Cell', 'Cell'],
         ['Cell', 'Cell', 'Cell']
       ];
   
       const tableHeaders = ['Header 1', 'Header 2', 'Header 3'];
   
       component.tableHeaders = tableHeaders;
   
       component.tableRows = tableRows;
   
       const temporalItem = component.tableRowsObjects[0];
       component.deleteRow(temporalItem);
       expect(component.isEditing.length).toBe(0);
       expect(component.tableRowsObjects.indexOf(temporalItem)).toBe(-1);
     });
   
     it('function cancelEditing() should finish the row edition', () => {
       const tableRows = [
         ['Cell', 'Cell', 'Cell'],
         ['Cell', 'Cell', 'Cell'],
         ['Cell', 'Cell', 'Cell']
       ];
   
       const tableHeaders = ['Header 1', 'Header 2', 'Header 3'];
   
       component.tableHeaders = tableHeaders;
   
       component.tableRows = tableRows;
   
       const temporalItem = component.tableRowsObjects[0];
   
       component.isEditing.push(temporalItem);
   
       component.cancelEditing(temporalItem);
       expect(component.isEditing.length).toBe(0);
     });
   
     it('should accept any kind of models', () => {
       const tableRows = [
         [1, 'Cell', 'Cell'],
         ['Cell', 2, 'Cell'],
         ['Cell', 'Cell', 3]
       ];
   
       component.tableRows = tableRows;
   
       expect(component.tableRows).toBe(tableRows);
     });*/
});
//# sourceMappingURL=editable-table.component.spec.js.map