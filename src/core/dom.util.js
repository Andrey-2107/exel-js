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
        if (node instanceof Element) {
            node = node.$el;
        }

        if (Element.prototype.append) {
            this.$el.append(node.$el);
        } else {
            this.$el.appendChild(node.$el);
        }

        return this;
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
