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

// Using code from CHallenge 10

let percentageReport = function percentageReport(){
    let columns = GRID[0].length;
    let rows = GRID.length;
    let gridSize = rows * columns;
    // let cellContents = [];
    let cellContent = "";
    let percentages = [];
    let rocks = 0;
    let currents = 0;
    let openWater = 0;

    //Challenge 16:
    GRID[8][9] = "^";

    for (let k = 0; k < rows; k++) {
        for (let j = 0; j < columns; j++) {
            // cellContents.push(GRID[k][j] + ""); //copy the array
            cellContent = GRID[k][j] + "";
            if (cellContent === "^"){
                // let row = String(k + 1);
                // let column = String.fromCharCode(65 + j);
                // rocks.push(column + "" + row);
                rocks++;
            }
            if (cellContent === "~"){
                // let row = String(k + 1);
                // let column = String.fromCharCode(65 + j);
                // currents.push(column + "" + row);
                currents++;
            }
            if (cellContent === "") {
                openWater++;
            }
        }
    }

    // var openWaterPercent = +((openWater / gridSize * 100).toFixed(2));
    // var rocksPercent = +((rocks / gridSize * 100).toFixed(2));
    // var currentsPercent = +((currents / gridSize * 100).toFixed(2));
    percentages.push(openWater);
    percentages.push(rocks);
    percentages.push(currents);
    return percentages;
};

console.log(percentageReport());