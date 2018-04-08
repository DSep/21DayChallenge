const GRID = [
    ["", "", "", "^", "", "", "", "", "", ""],
    ["", "", "", "", "~", "", "", "", "", ""],
    ["", "", "", "", "^", "^", "", "", "", ""],
    ["", "", "", "", "^", "^", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
    ["~", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "^", "~", "~", "", "", "", "^", "", ""],
    ["", "^", "", "~", "~", "", "", "", "", ""],
    ["", "^", "", "", "~", "~", "", "", "", ""],
];

let lightDiagonal = function lightRow(givenRow){
    let columns;
    columns = GRID[0].length;
    let rows;
    let i = 0;
    let cellContents = [];
    while (i < GRID.length) {
        i++;
    }
    rows = i;
    let j = 0;
    i = 0;
    if (rows === columns) {
        while(j < columns && i < rows) {
            cellContents.push(GRID[i][j] + "");
            i++;
            j++;
        }
    } else {
        cellContents.push("nil");
    }

    return cellContents;
}

console.log(lightDiagonal(6));