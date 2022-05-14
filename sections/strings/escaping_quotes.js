var text = 'L\'albero means tree in Italian';
console.log( text ); // "L'albero means tree in Italian"

var text = "I feel \"high\"";

console.log(text);

var content = "<p class=\"special\">Hello World!</p>"; // valid String
var hello = '<p class="special">I\'d like to say "Hi"</p>'; // valid String

console.log(content, hello);

var hi = "<p class='special'>I'd like to say &quot;Hi&quot;</p>"; // valid String
var hello = '<p class="special">I&apos;d like to say "Hi"</p>'; // valid String

console.log(hi, hello);

var x = `"Escaping " and ' can become very annoying`;
console.log(x);