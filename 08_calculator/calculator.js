const add = function(a, b) {
	const sum = a + b;
  return sum;
};

const subtract = function(a, b) {
  const remaining = a - b;
  return remaining;
};

const sum = function(array) {
  return array.reduce((total, current) => total + current, 0);
};

const multiply = function(array) {
  return array.reduce((total, current) => total * current, 1);
};

const power = function(a, b) {
  const exponent = a ** b;
  return exponent;
};

const factorial = function(a) {
	if (a === 0){
    return 1;
  }
  
  return a * factorial(a - 1);
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
