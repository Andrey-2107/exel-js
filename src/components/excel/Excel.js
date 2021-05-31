import { $ } from "../../core/dom.util";

export class Excel {
    constructor(selector, options = {}) {
        this.$el = document.querySelector(selector);
        this.components = options.components || [];
    }

    getRoot() {

        const $root = $.create('div', 'excel');

        this.components.forEach((Component) => {
            const $el = $.create('div', Component.className);

            const component = new Component($el);
            const componentTemplate = component.toHtml();
            $el.innerHTML = component.toHtml();
            $root.append($el);
        })


        return $root;
    }

    render() {
        const node = this.getRoot();
        this.$el.append(node);
    }
}
