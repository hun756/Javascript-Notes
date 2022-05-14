var s = "one, two, three, four, five"
var a = s.split(", "); // ["one", "two", "three", "four", "five"]

console.log(a);

a = s.split(", ").join("--"); // "one--two--three--four--five"
console.log(a);