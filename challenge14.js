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
Instructions:
A cell is considered dangerous if there is a rock or a strong current in it, OR in the cells immediately above, below,
left, or right of it. Write a function called isDangerous() that will take a cell in the format 'G7' and return a true
or a false value. (Example: isDangerous('E4') would return true, because there is a rock there. Similarly,
isDangerous('B9') would return true, because there are rocks and currents AROUND the cell. However, isDangerous('I6')
would return false because it is open water.)
 */

let isDangerous = function isDangerous(string){
    let columns = GRID[0].length;
    let rows = GRID.length;

    let selecColumStr = string[0];
    let selecColumInt = selecColumStr.charCodeAt(0) - 65;
    let selecRow = Number(string[1]) - 1;
    return (!isSafe(selecRow, selecColumInt));
}

//Helper function to check if a given cell (string) and the cells touching it are safe
//REQUIRES: Cell identification, as a string, with column letter then row number.
//EFFECTS: Checks whether the cell or surroundings have a rock or strong current
let isSafe = function isSafe(row, column)  {
    let columns = GRID[0].length;
    let rows = GRID.length;

    //left check
    if (column - 1 < columns && !isSafeCell(row, column - 1))
        return false;
    //right check
    if (column + 1 < columns && !isSafeCell(row, column - 1))
        return false;
    //up check
    if (row - 1 < rows && !isSafeCell(row - 1, column))
        return false
    //down check
    if (row + 1 < rows && !isSafeCell(row + 1, column))
        return false;

    let cellContents = GRID[row][column] + "";
    return cellContents !== "~" && cellContents !== "^";
}

let isSafeCell = function isSafeCell(row, column) {
    let cellContents = GRID[row][column] + "";
    return cellContents !== "~" && cellContents !== "^";
}

console.log(isDangerous('E4')); //True
console.log(isDangerous('B9')); //True
console.log(isDangerous('I6')); //False