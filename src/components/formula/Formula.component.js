import { ExcelComponent } from "../../core/ExcelComponent";

export class FormulaComponent extends ExcelComponent{
    static className = 'excel__formula';

    toHtml() {
        return `
            <div class="formula-info">fx</div>
            <div class="formula-input" contenteditable="true" spellcheck="false"></div>
        `;
    }
}
