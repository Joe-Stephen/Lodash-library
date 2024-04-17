import _ from "lodash";

//Creates an object composed of keys generated from the results of running each element of collection thru iteratee. The corresponding value of each key is the last element responsible for generating the key. The iteratee is invoked with one argument: (value).

let result = _.keyBy(
  [
    { dir: "left", code: 97 },
    { dir: "right", code: 100 },
  ],
  function (o) {
    return String.fromCharCode(o.code);
  }
);

let result2 = _.keyBy(
  [
    { dir: "left", code: 97 },
    { dir: "right", code: 100 },
  ],
  "dir"
);

console.log(result);
console.log(result2);
