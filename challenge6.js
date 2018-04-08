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


let lightRow = function lightRow(int){
    let columns;
    columns = GRID[0].length;
    let rows;
    let i = 0;
    let cellContents = [];
    while (i < GRID.length) {
        cellContents = GRID[row][column] + "";
        i++;
    }
    rows = i;
    return cellContents;
}

console.log(lightRow(6));