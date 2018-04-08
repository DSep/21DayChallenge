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


let lightColumn = function lightColumn(givenColumnLetter){
    // let columns;
    // columns = GRID[0].length;
    let i = GRID.length;
    let rows;
    let cellContents = [];
    rows = i + 1 - 1;

    let givenColumn = givenColumnLetter.charCodeAt(0) - 65;
    let j = 0;
    while(j < rows) {
        cellContents.push(GRID[j][givenColumn] + "");
        j++;
    }
    return cellContents;
}

console.log(lightColumn('C'));