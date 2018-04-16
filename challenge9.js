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

let isSafe = function isSafe(string)  {
    let columns;
    columns = GRID[0].length;
    let i = GRID.length;
    let rows;
    let cellContents;
    rows = i + 1 - 1;
    let selecColumStr = string[0];
    let selecColumInt = selecColumStr.charCodeAt(0) - 65;
    let selecRow = Number(string[1]) - 1;
    cellContents = GRID[selecRow][selecColumInt] + "";
    return cellContents !== "~" && cellContents !== "^";
}

console.log(isSafe('D7'));

//Improvement
//let isSafe = function isSafe(string){
//     let columns = GRID[0].length;
//     let rows = GRID.length;
//
//     let selecColumStr = string[0];
//     let selecColumInt = selecColumStr.charCodeAt(0) - 65;
//     let selecRow = Number(string[1]) - 1;
//     let cellContents = GRID[selecRow][selecColumInt] + "";
//     return cellContents !== "~" && cellContents !== "^";
// }