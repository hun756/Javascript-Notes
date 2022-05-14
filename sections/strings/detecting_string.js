var _u;

var aString = "my string";
var anInt = 5;
var anObj = {};
_u = typeof aString === "string"; // true
console.log(_u);
_u = typeof anInt === "string"; // false
console.log(_u);
_u = typeof anObj === "string"; // false
console.log(_u);

var aStringObj = new String("my string");
_u = aStringObj instanceof String; // true
console.log(_u);

var isString = function (value) {
    return typeof value === "string" || value instanceof String;
};

var aString = "Primitive String";
var aStringObj = new String("String Object");

_u = isString(aString); // true
console.log(_u);
_u = isString(aStringObj); // true
console.log(_u);
_u = isString({}); // false
console.log(_u);
_u = isString(5); // false
console.log(_u);

var pString = "Primitive String";
var oString = new String("Object Form of String");
_u = Object.prototype.toString.call(pString);//"[object String]"
console.log(_u);
_u = Object.prototype.toString.call(oString);//"[object String]"
console.log(_u);

var aString = "Primitive String";

// Generic check for a substring method
if (aString.substring) {
    console.log("Substring generic check");
}

// Explicit check for the String substring prototype method
if (aString.substring === String.prototype.substring) {
    console.log("Explicit check for substring");
    aString.substring(0,);
}