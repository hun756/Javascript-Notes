// 32-bit number (from -2,147,483,648 to 2,147,483,647)
var myInteger = 12; 
console.log("32 bit integer",myInteger);

// 64-bit number (from -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807)
var myLong = 9310141419482; 
console.log("64 bit integer (long)",myLong);

// 32-bit floating-point number (decimal)
var myFloat = 5.5;
console.log("32 bit floating point number",myFloat);

// 64-bit floating-point number
var myDouble = 9310141419482.22;
console.log("64 bit floating point number",myDouble);

var myBoolean = true; // 1-bit true/false (0 or 1)
console.log("boolean(true)",myBoolean);

var myBoolean2 = false;
console.log("boolean(false)",myBoolean2);

var myNotANumber = NaN;
console.log("not a number",myNotANumber);

var anotherVar = void 0;
console.log("another undefined var",anotherVar);

var NaN_Example = 0/0; // NaN: Division by Zero is not possible
console.log("Divide zero : ", NaN_Example);

var notDefined; // undefined: we didn't define it to anything yet
console.log("not defined : ", notDefined);

console.log(aRandomVariable); // undefined
var myNull = null; // null