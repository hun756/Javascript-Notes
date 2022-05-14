var u = null;

u = "abc".repeat(3); // Returns "abcabcabc"
console.log(u);

u = "abc".repeat(0); // Returns ""
console.log(u);

// u = "abc".repeat(-1); // Throws a RangeError
// console.log(u);

var myString = "abc";
var n = 3;
var _arr = new Array(n + 1).join(myString); // Returns "abcabcabc"
console.log(_arr);