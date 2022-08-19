// Write a program to find the factorial of a number.
"use strict"
let num=5;
let dummy=1;
if (num>=0){
    if (num===0){
        console.log(1);
    }
    for(let i=1;i<=num;i++){
        dummy=dummy*i
    }
    console.log(`The Factorial for ${num} is ${dummy}`);
}
else{
    console.log(`We can't find the Factorial for the given ${num}`);
}