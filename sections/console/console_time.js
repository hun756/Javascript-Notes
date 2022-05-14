console.time('response in');
alert('Click to continue');

console.timeEnd('response in');

console.time('response in');
alert('One more time');

console.timeEnd('response in');

console.time('Loop time');
var elms = document.getElementsByTagName('*'); //select all elements on the page
for (var i = 0; i < 5000; i++) {
    for (var j = 0, length = elms.length; j < length; j++) {
        // nothing to do ...
    }
}
console.timeEnd('Loop time');