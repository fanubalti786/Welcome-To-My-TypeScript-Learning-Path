// 0.Using toFixed() to format the number with 2 digits after the decimal point
var num1 = 123.456789;
var formattedNum = num1.toFixed(2);
console.log(formattedNum); // Output: "123.46"
// 1.toPrecision(): This method returns a string representing the number to a specified precision.
var num2 = 123.456789;
var precisionNum = num2.toPrecision(4);
console.log(precisionNum); // Output: "123.5"
// 2.toString(): This method converts a number to a string.
var num3 = 123.45;
var strNum = num3.toString();
console.log(strNum); // Output: "123.45"
// 3.toExponential(): This method returns a string representing the number in exponential notation
var num4 = 12345;
var expNum = num4.toExponential(2);
console.log(expNum); // Output: "1.23e+4"
// 4.parseInt(): This function parses a string argument and returns an integer 
//  of the specified radix.
var str1 = "10";
var parsedNum = parseInt(str1);
console.log(parsedNum); // Output: 10
// 5.parseFloat(): This function parses a string argument and returns a floating point number.
var str2 = "3.14";
var parsedFloat = parseFloat(str2);
console.log(parsedFloat); // Output: 3.14
