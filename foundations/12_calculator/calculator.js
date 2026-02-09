const add = function(x,y) {
  return x + y;
	
};

const subtract = function(x,y) {
	return x - y;
};

const sum = function(arr){
  let total = 0;
  if(arr.length>0){
    for(let i = 0; i < arr.length; i++){
      total += arr[i];
    }
  }
  else{
    return 0;
  }
  return total;
};

const multiply = function(arr) {
  let total = 1;
  if (arr.length>0){
    for(let i = 0; i<arr.length; i++){
      total *= arr[i];    
    }
  }
  else{
    return 0;
  }
  return total;
};

const power = function(x, y) {
	return x**y;
};

const factorial = function(n) {
  let result = 1;
	for(let i=n; i>0;i--){
    result *= i;
  }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
