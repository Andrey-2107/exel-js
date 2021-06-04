class DomUtil {
    constructor(selector) {
       if (typeof selector === 'string') {
           this.$el = $(selector);
       } else {
           this.$el = selector;
       }
    }

    html(html) {
        if (typeof html === 'string') {
            this.$el.innerHTML = html;
            return this;
        }

        return this.$el.outerHTML.trim();
    }

    clear() {
        this.html('');
        return this;
    }

    on(eventType, callback) {
        this.$el.addEventListener(eventType, callback);
    }

    off(eventType, callback) {
        this.$el.removeEventListener(eventType, callback)
    }

    append(node) {
        if (node instanceof DomUtil) {
            node = node.$el;
        }

        if (Element.prototype.append) {
            this.$el.append(node);
        } else {
            this.$el.appendChild(node);
        }

        return this;
    }

    closest(selector) {
       return $(this.$el.closest(selector));
    }

    get dataSet() {
        return this.$el.dataset;
    }

    getCoords() {
        return this.$el.getBoundingClientRect();
    }

    findAll(selector) {
        return this.$el.querySelectorAll(selector);
    }

    css(styles) {
        for (let style in styles) {
            this.$el.style[style] = styles[style];
        }

        return this.$el;
    }
}

export function $(selector) {
    return new DomUtil(selector);
}

$.create = (tagName, classes = '') => {
    const el = document.createElement(tagName);

    if (classes) {
        el.classList.add(classes);
    }

    return $(el);
};
