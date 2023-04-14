"use strict";

function matchHouse(step) {
    let init = 6;
    return init += ((step - 1) * 5);
}

var matchsticks = matchHouse(1);
console.log(matchsticks);
var matchsticks = matchHouse(2);
console.log(matchsticks);
var matchsticks = matchHouse(3);
console.log(matchsticks);
var matchsticks = matchHouse(4);
console.log(matchsticks);
var matchsticks = matchHouse(87);
console.log(matchsticks);