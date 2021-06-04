import { ExcelComponent } from "../../core/ExcelComponent";
import { createTable } from "./table.template";
import { $ } from "../../core/dom.util";

export class TableComponent extends ExcelComponent{
    static className = 'excel__table';

    constructor($root, options) {
        super($root, {
            listeners: ['mousedown']
        });
    }

    toHtml() {
        return createTable();
    }

    onMousedown(ev) {
        if (ev.target.dataset.resize) {
            const $resizer = $(ev.target);
            const $parent = $resizer.closest('[data-type="resizable"]');
            const { bottom, height, right, width } = $parent.getCoords();
            const cells = this.$root.findAll(`[data-column="${$parent.dataSet.col}"]`);
            const rows = this.$root.findAll(`[data-row="${$parent.dataSet.row}"]`);

            document.onmousemove = (moveEvent) => {
                const deltaWidth = moveEvent.pageX - right;
                const deltaHeight = moveEvent.pageY - bottom;
                const valueWidth = width + deltaWidth;
                const valueHeight = height + deltaHeight;
                $parent.css({ width: `${valueWidth}px`});
                cells.forEach((cell) => cell.style.width = `${valueWidth}px`);
                rows.forEach((row) => row.parentNode.style.height = `${valueHeight}px`);
            };

            document.onmouseup = () => {
                document.onmousemove = null;
            };
        }
    }
}
