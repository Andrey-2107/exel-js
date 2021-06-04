const CODES = {
    A: 65,
    Z: 90
};

function toCell(_, col) {
    return `
        <div class="cell" contenteditable="true" spellcheck="false" data-column="${col}"></div>
    `;
}

function toColumn(col, index) {
    return `
        <div class="column" data-type="resizable"  data-col="${index}">
            ${col}
            <div class="col-resize" data-resize="col"></div>
        </div>
    `;
}

function createRow(content, index = '') {
    return `
    <div class="row">
        <div class="row-info" data-type="resizable" data-row="${index}">
            ${index}
            <div class="row-resize"  data-resize="row"></div>
        </div>
        <div class="row-data">${content}</div>
    </div>
    `;
}

function toChar(_, index) {
    return String.fromCharCode(CODES.A + index);
}

export function createTable(rowsCount = 50) {
    const colsCount = CODES.Z - CODES.A + 1;
    const rows = [];
    const cols = new Array(colsCount)
        .fill('')
        .map(toChar)
        .map(toColumn)
        .join('');

    const cells = Array(colsCount)
        .fill('')
        .map(toCell)
        .join('');

    rows.push(createRow(cols));

    for (let i = 0; i < rowsCount; i++) {
        rows.push(createRow(cells, i + 1));

    }

    return rows.join('');
}
