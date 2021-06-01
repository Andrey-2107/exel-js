import { ExcelComponent } from "../../core/ExcelComponent";
import { createTable } from "./table.template";

export class TableComponent extends ExcelComponent{
    static className = 'excel__table';

    toHtml() {
        return createTable();
    }
}
