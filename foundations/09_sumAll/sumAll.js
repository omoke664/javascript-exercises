/*
create function sumAll, pass in arguments, x & y
create variable to hold sum of numbers e.g., result
if x >= y: y starting point, x end point
    use a for loop starting from y: y<=x: y++
    result += y

else: x starting point, y end point
    use a for loop starting from x: x<=y: x++
    result += x

return the result of sum (return result)
*/

const sumAll = function(x,y) {
    if (typeof x!== "number" || typeof y !== "number"){
        return "ERROR";
    }
    let result = 0;
    if (x < 0 || y < 0 || !Number.isInteger(x) || !Number.isInteger(y)) {
        return "ERROR";
    }
    else{
    if (x>=y){
    for(let i=y;i<=x;i++){
        result += i;
    }
    }
    else{
        for(let i = x; i <= y; i++){
            result += i;
        }
    }
    }
    
    return result;

};

// Do not edit below this line
module.exports = sumAll;
