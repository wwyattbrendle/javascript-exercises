const add = function(a, b) {
	const sum = a + b;
  return sum;
};

const subtract = function(a, b) {
  const remaining = a - b;
  return remaining;
};

const sum = function(array) {
  let len = array.length;
  let number = 0;
  for(let i = 0; i < len; i++) {
    number += array[i];
  }

  return parseInt(number);
};

const multiply = function(array) {
  let len = array.length;
  let number = array[0];
  for(let i = 1; i < len; i++) {
    number *= array[i];
  }
  return parseInt(number);
};

const power = function(a, b) {
  const exponent = a ** b;
  return exponent;
};

const factorial = function(a) {
	if (a === 0){
    return 1;
  } else if (a < 0) {
    return undefined;
  } else {
    let answer = a;
    for(let i = a - 1; i > 0; i--) {
      answer *= i;
    }
    return answer;
  }    
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
