var hello = "Hello";
var world = 'world';
var helloW = `Hello World`; // ES2015 / ES6

var intString = String(32); // "32"
var booleanString = String(true); // "true"
var nullString = String(null); // "null"

var intString = (5232).toString(); // "5232"
var booleanString = (false).toString(); // "false"
var objString = ({}).toString(); // "[object Object]"

var charptr = String.fromCharCode(104,101,108,108,111) //"hello"
console.log("charcode -> ", charptr);

var arr = new Uint8Array([104,101,108,108,111]);
console.log("charptr -> ", String.fromCharCode(...arr));

var objectString = new String("Yes, I am a String object");
typeof objectString;//"object"
typeof objectString.valueOf();//"string"

// Concatenating Strings
var foo = "Foo";
var bar = "Bar";
console.log(foo + bar); // => "FooBar"
console.log(foo + " " + bar); // => "Foo Bar"
foo.concat(bar) // => "FooBar"
"a".concat("b", " ", "d") // => "ab d"

var string = "string";
var number = 32;
var boolean = true;
console.log(string + number + boolean); // "string32true"

var place = `World`;
var greet = `Hello ${place}!`
console.log(greet); // "Hello World!"

`a\\b` // = a\b
String.raw`a\\b` // = a\\b
console.log(String.raw`a\\b`);