const GRID = [
    ["TEST", "", "", "^", "", "", "", "", "", ""],
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


let lightCell = function lightCell(string){
    let columns;
    columns = GRID[0].length;
    let i = GRID.length;
    let rows;
    let cellContents;
    rows = i + 1 - 1;
    let selecColumStr = string[0];
    let selecColumInt = selecColumStr.charCodeAt(0) - 65;
    let selecRow = Number(string[1]) - 1;
    // let selecRowDigit2 = Number(string[2]) - 1;
    // if (selecRowDigit2 !== undefined) {
    //     selecRow *= 10;
    //     selecRow += selecRowDigit2;
    // }

    if (selecRow >= rows || selecColumInt >= columns) {
        return false;
    }
    cellContents = GRID[selecRow][selecColumInt] + "";
    return cellContents;
}

console.log(lightCell('A11'));
