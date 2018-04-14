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

let firstRock = function firstRock(){
    let columns;
    columns = GRID[0].length;
    let i = GRID.length;
    let rows = i + 1 - 1;
    // let cellContents = [];
    let cellContent;
    let rockPos;
    let toBreak = false;

    for(let k = 0; k < rows; k++){
        for(let j = 0; j < columns; j++) {
            // cellContents.push(GRID[k][j] + ""); //copy the array
            cellContent = GRID[k][j] + "";
            if (cellContent === "^"){
                let row = String(k + 1);
                let column = String.fromCharCode(65 + j);
                rockPos = (column + "" + row);
                toBreak = true;
                break;
            }
        }
        if (toBreak)
            break;
    }
    return rockPos;
}

console.log(firstRock());