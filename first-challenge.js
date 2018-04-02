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

function gridSize() {
    let columns;
    columns = GRID[0].length;
    if (columns === undefined){
        console.log("Columns undefined!");
        console.log(columns);
    }
    let rows;
    let i = 0;
    while (GRID[0][i] !== undefined) {
        i++;
    }
    rows = i;
    // for (i = 0; i < array.length; i++) {
    //   rows = i + 1;

    // }
    let answer = columns + " x " + rows;

    return answer;
}




// if (rows === undefined){
//   console.log(rows);
//   console.log("Columns undefined!");

// }

//     if (answer === undefined) {
//   console.log("Columns undefined!");
//   console.log(answer);
// }
var answer = gridSize(GRID);
console.log(answer);