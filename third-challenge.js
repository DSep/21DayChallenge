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


let lightCell = function lightCell(string){
    let columns;
    columns = GRID[0].length;
    let rows;
    let i = 0;
    while (i < GRID.length) {
        i++;
    }
    rows = i;
    let totalCells = columns * rows;
    let selecColumStr = string[0];
    let selecColumInt = selecColumStr.charCodeAt(0) - 65;
    let selecRow = Number(string[1]) - 1 ;
    // The row is given as a 1 based integer, so we shift it back ot 0 based by subtracking 1
    console.log("Row" + selecRow + " Column" + selecColumInt);
    answer = GRID[selecRow][selecColumInt] + "";
    return answer;
}


console.log(lightCell("D1"));

// Improved
// let lightCell = function lightCell(string){
//     let columns = GRID[0].length;
//     let rows = GRID.length + 1 - 1;
//
//     let selecColumStr = string[0];
//     let selecColumInt = selecColumStr.charCodeAt(0) - 65;
//     let selecRow = Number(string[1]) - 1 ;
//     return GRID[selecRow][selecColumInt] + "";
// }