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

/*

You need to look at all the cells beside, above, and below the ship and decide which cell is the best one for them to go to.
Rules:
    Target cell should not be dangerous.
    Target cell should be adjacent to the given coordinates (beside, above or below).

Write a function called distressBeacon() that takes a coordinate in the format 'H2' and returns a different
coordinate in the same format. (Example: distressBeacon('E8') should return 'F7'.)

Previous Instructions for a dangerous cell:
A cell is considered dangerous if there is a rock or a strong current in it, OR in the cells immediately above, below,
left, or right of it. Write a function called isDangerous() that will take a cell in the format 'G7' and return a true
or a false value. (Example: isDangerous('E4') would return true, because there is a rock there. Similarly,
isDangerous('B9') would return true, because there are rocks and currents AROUND the cell. However, isDangerous('I6')
would return false because it is open water.)
 */

//Helper function to check if point is within GRID
let checkBounds = function checkBounds(row, column) { // true if inside bounds
    let columns = GRID[0].length + 1 - 1;
    let rows = GRID.length + 1 - 1;

    let columnGood = (column >= 0 && column < columns);
    let rowGood = (row >= 0 && row < rows);

    return columnGood && rowGood;
};

//Helper function to check if given cell is safe
let isSafeCell = function isSafeCell(row, column) {
    if (!checkBounds(row, column)) {
        return false;
    }
    let cellContents = GRID[row][column] + "";
    return cellContents !== "~" && cellContents !== "^";
};

//Helper function to check if a given cell and the cells
// touching it are safe
let isSafe = function isSafe(row, column) {
    // let columns = GRID[0].length;
    // let rows = GRID.length + 1 - 1;
    column += (1 - 1);
    row += (1 - 1);

    //Error check
    // if (checkBounds(row, column)) {
    //     return false;
    // }

    //left check
    if (checkBounds(row, column - 1)) {
        if (!isSafeCell(row, column - 1))
            return false;
    }
    //right check
    if (checkBounds(row, column + 1)) {
        if (!isSafeCell(row, column + 1))
            return false;
    }
    //up check
    if (checkBounds(row - 1, column)) {
        if (!isSafeCell(row - 1, column))
            return false;
    }
    //down check
    if (checkBounds(row + 1, column)) {
        if (!isSafeCell(row + 1, column))
            return false;
    }
    // //up-left check
    // if (checkBounds(row - 1, column - 1)) {
    //     if (!isSafeCell(row - 1, column - 1))
    //         return false;
    // }
    // //up-right check
    // if (checkBounds(row - 1, column + 1)) {
    //     if (!isSafeCell(row - 1, column + 1))
    //         return false;
    // }
    // //down-right check
    // if (checkBounds(row + 1, column + 1)) {
    //     if (!isSafeCell(row + 1, column + 1))
    //         return false;
    // }
    // //down-left check
    // if (checkBounds(row + 1, column - 1)) {
    //     if (!isSafeCell(row + 1, column - 1))
    //         return false;
    // }

    return isSafeCell(row, column); //itself
};

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

//Convert Integer Row and Column position to string
let cellNumToStr = function cellNumToStr(rowInt, columnInt){
    let row = String(rowInt + 1);
    let column = String.fromCharCode(65 + columnInt);
    let curPos = (column + "" + row);
    return curPos;
};

//Function to check which of the cells surrounding it are safe.
// Checks diagonals and adjacent cells. Assumes that itself is not safe already.
// No default value specified for case where none are found, so I put "".
let findSafe = function findSafe(row, column)  {
    let safeCell = "none";

    //Clockwise from up-right
    // //up-right check
    // if (checkBounds(row - 1, column + 1) && isSafe(row - 1, column + 1)) {
    //     safeCell = cellNumToStr(row - 1, column + 1);
    //     return safeCell;
    // }
    //right check
    if (checkBounds(row, column + 1) && isSafe(row, column + 1)) {
        safeCell = cellNumToStr(row, column + 1);
        return safeCell;
    }
    // //down-right check
    // if (checkBounds(row + 1, column + 1) && isSafe(row + 1, column + 1)) {
    //     safeCell = cellNumToStr(row + 1, column + 1);
    //     return safeCell;
    // }
    //down check
    if (checkBounds(row + 1, column) && isSafe(row + 1, column)) {
        safeCell = cellNumToStr(row + 1, column);
        return safeCell;
    }
    // //down-left check
    // if (checkBounds(row + 1, column - 1) && isSafe(row + 1, column - 1)) {
    //     safeCell = cellNumToStr(row + 1, column - 1);
    //     return safeCell;
    // }
    //left check
    if (checkBounds(row, column - 1) && isSafe(row, column - 1)) {
        safeCell = cellNumToStr(row, column - 1);
        return safeCell;
    }
    // //up-left check
    // if (checkBounds(row - 1, column - 1) && isSafe(row - 1, column - 1)) {
    //     safeCell = cellNumToStr(row - 1, column - 1);
    //     return safeCell;
    // }
    //up check
    if (checkBounds(row - 1, column) && isSafe(row - 1, column)) {
        safeCell = cellNumToStr(row - 1, column);
        return safeCell;
    }

    return safeCell;
};

// Main function to be run by the captain. Takes a string
// cell position and reuturns the same format
let distressBeacon = function distressBeacon(string) {
    console.log('begin distress beacon');
    let row = cellRowToInt(string);
    console.log('row: ' + row);
    let column = cellColumnToInt(string);
    console.log('column: ' + (column + 1));
    let targetCell = findSafe(row, column);
    return targetCell;
};








// Tests
// console.log(distressBeacon('E8')); //'F8'
// console.log(distressBeacon('G3')); //H2 or H3 or H4 - Currently H2
// console.log(distressBeacon('E1')); // F1, if isSafe does NOT consider diagonals
// console.log(distressBeacon('C9')); // None...
// console.log(distressBeacon('G10')); //H10

