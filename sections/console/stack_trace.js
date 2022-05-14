function foo() {
    console.trace('My log statement');
}

foo();

var e = new Error('foo');
console.error(e.stack);