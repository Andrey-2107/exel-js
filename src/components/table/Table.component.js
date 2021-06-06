import { ExcelComponent } from "../../core/ExcelComponent";
import { createTable } from "./table.template";
import { $ } from "../../core/dom.util";
import {colResize} from "./table-column-resize";

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
            const type = $resizer.dataSet.resize;
            const sideProp = type === 'col' ? 'bottom' : 'right';
            let value = null;

            $resizer.css({
                opacity: 1,
                [sideProp]: '-5000px'
            })

            document.onmousemove = (moveEvent) => {
                if (type === 'col') {
                    const deltaWidth = moveEvent.pageX - right;
                    value = width + deltaWidth;
                    $resizer.css({ right: -deltaWidth + 'px' })
                } else {
                    const deltaHeight = moveEvent.pageY - bottom;
                    value = height + deltaHeight;
                    $resizer.css({ bottom: -deltaHeight + 'px' })
                }
            };

            document.onmouseup = () => {
                document.onmousemove = null;
                document.onmouseup = null;

                if (type === 'col') {
                    $parent.css({ width: `${value}px`});
                    this.$root.findAll(`[data-column="${$parent.dataSet.col}"]`)
                        .forEach((cell) => cell.style.width = `${value}px`);
                } else {
                    this.$root.findAll(`[data-row="${$parent.dataSet.row}"]`)
                        .forEach((row) => row.parentNode.style.height = `${value}px`);
                }

                $resizer.css({
                    right: 0,
                    bottom: 0,
                    opacity: 0
                });
            };
        }
    }
}
