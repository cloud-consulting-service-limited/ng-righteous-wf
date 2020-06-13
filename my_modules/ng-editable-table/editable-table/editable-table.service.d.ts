import { TableRow } from '../util/table-row';
import { TableCell } from '../util/table-cell';
export declare class EditableTableService {
    tableHeadersObjects: TableCell[];
    tableRowsObjects: TableRow[];
    dataType: any[];
    isEditing: TableRow[];
    constructor();
    createTable(headers: any, content: any, dataType: any): void;
    createTableWithIds(headers: any, content: any, dataType: any): void;
    addRow(): void;
    editRow(selectedRow: TableRow): void;
    saveRow(selectedRow: TableRow): void;
    cancelEdition(selectedRow: TableRow): void;
    deleteRow(selectedRow: TableRow): void;
    checkTypeOf(value: any): string;
    private createHeaders(headers, dataType);
}
