import { ExcelComponent } from "../../core/ExcelComponent";

export class HeaderComponent extends ExcelComponent{
    static className = 'excel__header';

    toHtml() {
        return `
            <input type="text" class="input-title" value="New Table"/>
            <div class="btns-wrap">
                <div class="button">
                    <i class="material-icons">
                        exit_to_app
                    </i>
                </div>

                <div class="button">
                    <i class="material-icons">
                        delete
                    </i>
                </div>
            </div>
        `;
    }
}
