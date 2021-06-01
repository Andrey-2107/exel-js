import { ExcelComponent } from "../../core/ExcelComponent";

export class FormulaComponent extends ExcelComponent{
    static className = 'excel__formula';

    constructor($root) {
        super($root, {
            name: 'Formula',
            listeners: ['input', 'click']
        });
    }

    toHtml() {
        return `
            <div class="formula-info">fx</div>
            <div class="formula-input" contenteditable="true" spellcheck="false"></div>
        `;
    }

    onInput(ev) {
        console.log('on input formula component', ev)
    }

    onClick() {

    }
}
