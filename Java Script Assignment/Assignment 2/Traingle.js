/*Write a Javascript function to check whether a triangle is equilateral,
isosceles or scalene*/
let triange=function(s1,s2,s3){
    if (s1===s2&& s2===s3){
        console.log("equilateral");
    }
    else if (s1===s2|| s2===s3 || s3===s1){
        console.log("isosceles");
    }
    else{
        console.log("scalene");
    }
}
let res=triange(60,60,60)