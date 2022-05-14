// base 10 Number
var b10 = 12;

// base 16 String representation
var b16 = b10.toString(16); // "c"

console.log(b16);

// base 10 Number
var _b10 = parseInt(b16, 16); // 12
console.log(_b10);


var b16 = '3.243f3e0370cdc';
console.log(b16
    );
// Split into integer and fraction parts
var [i16, f16] = b16.split('.');
console.log([i16, f16]);

// Calculate base 10 integer part
var i10 = parseInt(i16, 16); // 3
console.log(i10);

// Calculate the base 10 fraction part
var f10 = parseInt(f16, 16) / Math.pow(16, f16.length); // 0.14158999999999988
console.log(f10);

// Put the base 10 parts together to find the Number
var b10 = i10 + f10; // 3.14159
console.log(b10);