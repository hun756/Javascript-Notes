// indexOf( searchString ) and lastIndexOf( searchString )

var string = "Hello, World!";
console.log(string.indexOf("o")); // 4
console.log(string.indexOf("foo")); // -1

console.log(string.lastIndexOf("o")); // 8
console.log(string.lastIndexOf("foo")); // -1

// includes( searchString, start )
console.log(string.includes("Hello")); // true
console.log(string.includes("foo")); // false

// replace( regexp|substring, replacement|replaceFunction )
string = string.replace("Hello", "Bye");
console.log(string); // "Bye, World!"
string = string.replace(/W.{3}d/g, "Universe");
console.log(string); // "Bye, Universe!"


var string = "heLlo, woRlD!";
string = string.replace(/([a-zA-Z])([a-zA-Z]+)/g, function (match, g1, g2) {
    // console.log("match", match);
    return g1.toUpperCase() + g2.toLowerCase();
});
console.log(string); // "Hello, World!"