// Write a JavaScript program to convert temperatures to and from Celsius, Fahrenheit.
/*[ Formula : c/5 = (f-32)/9 [ where c = temperature in Celsius and f = temperature in
    Fahrenheit ]
    Expected Output :
    60°C is 140 °F
    45°F is 7.222222222222222°C */

"use strict"
let Celsius=60
let Fahrenheit= 45
var cToF= (Celsius / 5)*9+32 
var FtoC=(Fahrenheit-32)/9 *5
console.log(`${Celsius}°C is ${cToF} °F`);
console.log(`${Fahrenheit}°F is ${FtoC}°C`);
