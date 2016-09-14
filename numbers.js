// Numbers have double-precision 64 bit binary format (15-17);
// Numbers are all floats in JS

var val1 = 5.5,
    val2 = 5;

var sum = val1 + val2;
console.log("Addition: " + sum);

var letsDivide = 15 / 5;
console.log("Division: " + letsDivide);

var wannaMultiply = 6 * 3;
console.log("Multiplication: " + wannaMultiply);

var subtractMe = 12 - 4;
console.log("Subtration: " + subtractMe);

var remainder = 16 % 5;
console.log("Modulo: " + remainder);

// Operation before
var val3 = 2;
var increment = val3++;
console.log("Increment Postfix: " + increment);

// Operation after
var val4 = 2;
var increment1 = ++val4;
console.log("Increment Prefix: " + increment1);
