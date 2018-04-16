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


let lightColumn = function lightColumn(givenColumnLetter){
    // let columns;
    // columns = GRID[0].length;
    let i = GRID.length;
    let rows;
    let cellContents = [];
    rows = i + 1 - 1;

    let givenColumn = givenColumnLetter.charCodeAt(0) - 65;
    let j = 0;
    while(j < rows) {
        cellContents.push(GRID[j][givenColumn] + "");
        j++;
    }
    return cellContents;
}

console.log(lightColumn('C'));

//Improvement
// let lightColumn = function lightColumn(givenColumnLetter){
//     let rows = GRID.length;
//     let cellContents = [];
//     let givenColumn = givenColumnLetter.charCodeAt(0) - 65;
//
//     for(j = 0; j < rows; j++)
//         cellContents.push(GRID[j][givenColumn] + "");
//     return cellContents;
// }