/*
create function removeFomArray- arguments: array, element (x)
use filter function to remove element from array that matches 'x'
return result array
*/


const removeFromArray = function(arr, ...args){
    return arr.filter(item => !args.includes(item));
}

// Do not edit below this line
module.exports = removeFromArray;
