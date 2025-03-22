function sumTable() {
    // TODO

    let rows = Array.from(document.querySelectorAll('table tr'));
    // tr:not:last-child td:nth-child(2)

    let output = rows.pop();

    let tableHeaderDeletion = rows.shift();
    let sum = 0;

    for (let row of rows) {
        let col = row.children[row.children.length - 1];
        
        sum += Number(col.textContent);
    }

    let outputCol = output.children[output.children.length - 1];
    outputCol.textContent = sum;
}