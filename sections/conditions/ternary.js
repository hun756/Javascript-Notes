var animal = 'kitty';
var result = (animal === 'kitty') ? 'cute' : 'still nice';

console.log(result);

var animal = 'kitty';
var result = '';
if (animal === 'kitty') {
    result = 'cute';
} else {
    result = 'still nice';
}


// multiline ternary
var a = 0;
var str = 'not a';
var b = '';
b = a === 0 ? (a = 1, str += ' test') : (a = 2);

console.log(b, 1);

var a = 1;
a === 1 ? console.log('Hey, it is 1!') : 0;

a === 1 ? console.log('Hey, it is 1!') : console.log('Weird, what could it be?');
if (a === 1) console.log('Hey, it is 1!'); else console.log('Weird, what could it be?');

console.log((function () {
    var animal = 'kitty';
    return (animal === 'kitty') ? 'meow' : 'woof';
})())