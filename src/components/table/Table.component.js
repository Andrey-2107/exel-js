import { ExcelComponent } from "../../core/ExcelComponent";

export class TableComponent extends ExcelComponent{
    static className = 'excel__table';

    toHtml() {
        return `<h1>TableComponent</h1>`
    }
}
