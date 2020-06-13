import { OnInit } from '@angular/core';
import { EditableTableService } from '../editable-table/editable-table.service';
export declare class TestingComponent implements OnInit {
    private service;
    tableHeaders: string[];
    tableRowsWithId: any[][];
    dataType: string[];
    constructor(service: EditableTableService);
    ngOnInit(): void;
    onRemove(row: any): void;
}
