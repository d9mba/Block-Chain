"use strict";

let removeSpace = (S) => {
  try {
    let str = S.toString().replaceAll(" ", ""); // Replace all spaces with empty string (Remove all spaces)
    return str;
  } catch (error) {
    return `Something went wrong, ${error.message}`;
  }
};

var output = removeSpace("Hii Boy");
console.log(output);
var output = removeSpace("Hii Boy Nice Day");
console.log(output);
var output = removeSpace(null);
console.log(output);
