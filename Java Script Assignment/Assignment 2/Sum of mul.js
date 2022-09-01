/*Write a JavaScript program to find the sum of the multiples of 3 and 5
under 1000*/
let sumOfMul=function(number){
    var s=0
    for(let i=0;i<=number;i++){
        
        if(i%3===0 || i%5===0){
            s+=i;
        }
    }
    return s;
}
let number=1000
let res=sumOfMul(number)
console.log(res);