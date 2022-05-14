console.log(" some whitespaced string ".trim());

// Stage 1 proposal
var a  = " this is me ".trimStart(); // "this is me "
var b = " this is me ".trimEnd(); // " this is me"

console.log(a);
console.log(b);

// Non-standard methods, but currently implemented by most engines
// " this is me ".trimLeft(); // "this is me "
// " this is me ".trimRight(); // " this is me"