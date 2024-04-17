import _ from "lodash";

// The opposite of _.before; this method creates a function that invokes func once it's called n or more times.

var saves = ["profile", "settings"];

var done = _.after(saves.length, function () {
  console.log("done saving!");
});

_.forEach(saves, function (type) {
  console.log("type : ", type);
  done();
});

//so this `done` function will only be executed after it has been called (saves.length)times.