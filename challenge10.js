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

let allRocks = function allRocks(){
    let columns;
    columns = GRID[0].length;
    let i = GRID.length;
    let rows = i + 1 - 1;
    // let cellContents = [];
    let cellContent;
    let rocks = [];

    for(let k = 0; k < rows; k++){
        for(let j = 0; j < columns; j++) {
            // cellContents.push(GRID[k][j] + ""); //copy the array
            cellContent = GRID[k][j] + "";
            if (cellContent === "^"){
                let row = String(k + 1);
                let column = String.fromCharCode(65 + j);
                rocks.push(column + "" + row);
            }
        }
    }
    return rocks;
}

console.log(allRocks());