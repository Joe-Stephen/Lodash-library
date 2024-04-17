import _ from "lodash";

// Creates a function that invokes func, with the this binding and arguments of the created function, while it's called less than n times. Subsequent calls to the created function return the result of the last func invocation.

const testFunction = _.before(3, () => console.log("Saved!"));

testFunction();
testFunction();
testFunction();
//The function's execution is limited to n-1. So even if we call it 3 times here, it only runs 2 times.
//One of the real world implication of this method can be : using this for preventing a user from submitting the login form multiple times.