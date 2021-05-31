class DomUtil {
    constructor() {

    }
}

export function $() {
    return new DomUtil();
}

$.create = (tagName, classes = '') => {
    const el = document.createElement(tagName);

    if (classes) {
        el.classList.add(classes);
    }

    return el;
}
