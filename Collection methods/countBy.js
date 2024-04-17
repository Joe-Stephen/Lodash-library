import _ from "lodash";

// Original array

let obj1 = [6.1, 4.2, 6.3, 5, 7.9, 5.3, 5.1, 7.3];

// Use of _.countBy() method
let y = _.countBy(obj1, Math.floor);

// Printing the output
console.log(y);
