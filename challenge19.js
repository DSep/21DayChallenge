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
* Lighthouse HQ also wants a report of the safety of your GRID. Write another function called safetyReport(), which
* returns the percentage of your grid that contains calm waters. Calm waters do not contain a rock or a strong current.
*
* Lighthouse HQ sent further instructions. They said that due to system limitations in the Lighthouse 9000&trade, you must
* use the reduce() function in your code. The return value should be a string in the form "##%". If there are any
* decimals, it should be rounded to 1 decimal point.
*/


// Using code from CHallenge 10

let safetyReport = function safetyReport(){
    let columns = GRID[0].length;
    let rows = GRID.length;
    let gridSize = rows * columns;
    let cellContent = "";
    let openWater = 0;

    //Challenge 16:
    GRID[8][9] = "^";

    for (let k = 0; k < rows; k++) {
        for (let j = 0; j < columns; j++) {
            cellContent = GRID[k][j] + "";
            if (cellContent === ""){
                openWater++;
            }
        }
    }

    let gridSize2 = 0;
    let openWater2 = GRID.reduce(function(accumulator, currentValue, currentIndex) {
        return accumulator + GRID[currentIndex].reduce(function(accumulator, currentValue, currentIndex2) {
            gridSize2++;
            if (GRID[currentIndex][currentIndex2] !== "^" && GRID[currentIndex][currentIndex2] !== "~") {
                return accumulator + 1;
            } else {
                return accumulator;
            }
        }, 0);
    }, 0);

    let openWater3 = 0;
    let gridSize3 = 0;
    for (let k = 0; k < rows; k++) {
        gridSize3 += GRID[k].reduce(function(accumulator, currentValue, currentIndex) {
            // if (GRID[k][currentIndex] !== "^" && GRID[k][currentIndex] !== "~") {
            //     return accumulator++;
            // } else {
            //     return accumulator;
            // }
            if (GRID[k][currentIndex] !== "^" && GRID[k][currentIndex] !== "~") {
                return openWater3++;
            }
            return accumulator + 1;
        }, 0);
    }

    console.log(openWater);
    console.log(openWater2);
    console.log(openWater3);


    var resultingPercentage = +((openWater / gridSize * 100).toFixed(1)); //Only 1 digit needed
    // if (resultingPercentage < 10) {
    //     return "0" + resultingPercentage + "%";
    // }

    return resultingPercentage + "%";
};

// Final code used:
// let safetyReport = function safetyReport(){
//     //Challenge 16:
//     GRID[8][9] = "^";
//
//     let gridSize2 = 0;
//     let openWater2 = GRID.reduce(function(accumulator, currentValue, currentIndex) {
//         return accumulator + GRID[currentIndex].reduce(function(accumulator, currentValue, currentIndex2) {
//             gridSize2++;
//             if (GRID[currentIndex][currentIndex2] === "") {
//                 return accumulator + 1;
//             } else {
//                 return accumulator;
//             }
//         }, 0);
//     }, 0);
//
//     var resultingPercentage = +((openWater2 / gridSize2 * 100).toFixed(1));
//     return resultingPercentage + "%";
// };


console.log(safetyReport());