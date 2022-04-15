const add = function(...input) {
	return input.reduce((previousValue, currentValue) => previousValue + currentValue, 0);
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(array) {
	return array.reduce((previousValue, currentValue) => previousValue + currentValue, 0);
};

const multiply = function(array) {
	return array.reduce((accumulator, nextValue) => accumulator * nextValue);
};

const power = function(a, b) {
	return Math.pow(a, b);
};

const factorial = function(num) {
	if (num === 0) return 1;
	let product = 1;
	for (let i = num; i > 0; i--) {
		product *= i;
	};
	return product;
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
