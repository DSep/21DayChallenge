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


// Main function to be run by the captain. Takes a string
// cell position and reuturns the same format
let addRock = function addRock(string) {
    console.log('begin adding rock');
    let row = cellRowToInt(string);
    console.log('row: ' + row);
    let column = cellColumnToInt(string);
    console.log('column: ' + (column + 1));
    GRID[row][column] = "^";
};

// addRock("J9");

// Manual solution

console.log(GRID);

GRID[row][column] = "^" + "";

GRID[8].splice(9,1, "^");

console.log(GRID);
