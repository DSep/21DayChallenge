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
    console.log("Row" + selecRow + " Column" + selecColumInt);
    answer = GRID[selecRow][selecColumInt] + "";
    return answer;
}

console.log(lightCell("D1"));