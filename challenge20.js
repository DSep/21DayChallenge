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

/*
* Ship captains have heard of your prowess and want to know the length of their routes through your grid. Write a
* function called calcDistance() which will take two coordinates in the form of 'A3' and calculate the distance between
* the two points. (Example: calling calcDistance('A1', 'C3') should return 2.83
*/

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

let calcDistance = function calcDistance(string1, string2) {
    let firstCellRow = cellRowToInt(string1);
    let firstCellColumn = cellColumnToInt(string1);
    let secondCellRow = cellRowToInt(string2);
    let secondCellColumn = cellColumnToInt(string2);

    let rowDist = firstCellRow - secondCellRow;
    let colDist = firstCellColumn - secondCellColumn;

    var distance = +(Math.sqrt(rowDist * rowDist + colDist * colDist).toFixed(2));
    return distance;
};

console.log(calcDistance('A1', 'C3'));