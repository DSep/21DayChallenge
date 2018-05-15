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


//Convert the Row of given string position to integer
// For 1 or 2 digits
let cellRowToInt = function cellRowToInt(string){
    let selecRow = Number(string[1]) - 1;
    let selecRowDigit2 = Number(string[2]);
    if (selecRowDigit2 === 0 || selecRowDigit2) {
        selecRow++;
        selecRow *= 10;
        selecRow += selecRowDigit2;
        selecRow--;
    }
    return selecRow;
};

//Convert the Column of given string position to integer
let cellColumnToInt = function cellColumnToInt(string){
    let selecColumStr = string[0];
    let selecColumInt = selecColumStr.charCodeAt(0) - 65;
    return selecColumInt;
};

let lightCell = function lightCell(string){
    let columns = GRID[0].length + 1-1;
    let rows = GRID.length+1-1;
    let cellContents;

    let selecColumInt = cellColumnToInt(string);
    let selecRow = cellRowToInt(string);

    if (selecRow >= rows || selecColumInt >= columns) {
        return false;
    }
    cellContents = GRID[selecRow][selecColumInt] + "";
    return cellContents;
};

// Solution
GRID[8][9] = "^";

//Other solution
// GRID[8].splice(9,1, "^");

// console.log(GRID);
