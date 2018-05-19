const GRID = [
    ["", "", "", "^", "", "", "", "", "", ""],
    ["", "", "", "", "~", "", "", "", "", ""],
    ["", "", "", "", "^", "^", "", "", "", ""],
    ["", "", "", "", "^", "^", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "^", "~", "~", "", "", "", "^", "", ""],
    ["", "^", "", "~", "~", "", "", "", "", ""],
    ["", "^", "", "", "~", "~", "", "", "", ""],
];

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

let evaluateRoute = function evaluateRoute(array) {
    let currentCount = 0;
    for (let i = 0; i < array.length; i++) {
        let cellRow = cellRowToInt(array[i]);
        let cellColumn = cellColumnToInt(array[i]);
        if (GRID[cellRow][cellColumn] === "^") {
            return false;
        }
        if (GRID[cellRow][cellColumn] === "~") {
            currentCount++;
        }
        if (currentCount === 3) {
            return false
        }
    }
    return true;
};

console.log(evaluateRoute(["A1", "B2", "C3", "D4"]));
console.log(evaluateRoute(["B1", "B2", "B3", "B4", "B5", "B6", "B7", "B8", "B9"]));