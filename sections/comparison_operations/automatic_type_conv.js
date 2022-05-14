var x = "Hello"; // typeof x is a string
x = 5; // changes typeof x to a number

var x = 5 + 7;      // x.valueOf() is 12, typeof x is a number
var x = 5 + "7";    // x.valueOf() is 57, typeof x is a string
var x = "5" + 7;    // x.valueOf() is 57, typeof x is a string
var x = 5 - 7;      // x.valueOf() is -2, typeof x is a number
var x = 5 - "7";    // x.valueOf() is -2, typeof x is a number
var x = "5" - 7;    // x.valueOf() is -2, typeof x is a number
var x = 5 - "x";    // x.valueOf() is NaN, typeof x is a number
