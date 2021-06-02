import { ExcelComponent } from "../../core/ExcelComponent";
import { createTable } from "./table.template";

export class TableComponent extends ExcelComponent{
    static className = 'excel__table';

    constructor($root, options) {
        super($root, {
            // listeners: ['click', 'mousedown', 'mousemove', 'mouseup']
        });
    }

    toHtml() {
        return createTable();
    }

    // onClick() {
    //     console.log('onClick')
    // }
    //
    // onMousedown(ev) {
    //     console.log('onMousedown')
    // }
    //
    // onMousemove() {
    //     console.log('onMousemove')
    // }
    //
    // onMouseup() {
    //     console.log('mouseup');
    // }
}
