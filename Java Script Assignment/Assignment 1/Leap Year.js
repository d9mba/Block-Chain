// Write a program to find whether a given year is a leap year
"use strict"
let year=2016;
if(year%100===0 && year%400===0){
    console.log(`The given year: ${year} is a Leap Year`);
}
else if (year%4===0 && year%100!==0) {
    console.log(`The given year: ${year} is a Leap Year`);
}

else{
    console.log(`The given year: ${year} is a Not Leap Year`);
}