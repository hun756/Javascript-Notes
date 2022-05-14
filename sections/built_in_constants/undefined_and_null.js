// undefined is a global value that represents the absence of an assigned value.
if (typeof undefined === 'undefined') {
    console.log("typeof undefined === 'undefined'");
}

// null is an object that indicates that a variable has been explicitly assigned "no value".

if (typeof null === 'object') {
    console.log("typeof null === 'object'");
}

let foo;
console.log('is undefined?', foo === undefined);
// is undefined? true

foo = { a: 'a' };
console.log('is undefined?', foo.b === undefined);
// is undefined? true

foo = () => { return; }
console.log('is undefined?', foo() === undefined);
// is undefined? true

foo = (param) => {
    console.log('is undefined?', param === undefined);
}
foo('a');
foo();
// is undefined? false
// is undefined? true


// undefined is also a property of the global window object.
// Only in browsers
console.log(window.undefined); // undefined
window.hasOwnProperty('undefined'); // true