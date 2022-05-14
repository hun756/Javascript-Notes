function print() {
    var _con;
    (_con = console).log.apply(_con, arguments);
}

var a = 'hello' || ''; // a = 'hello'
print(a);

var b = '' || []; // b = []
print(b);

var c = '' || undefined; // c = undefined
print(c);

var d = 1 || 5; // d = 1
print(d);

var e = 0 || {}; // e = {}
print(e);

var f = 0 || '' || 5; // f = 5
print(f);

var g = '' || 'yay' || 'boo'; // g = 'yay'
print(g);


var a = 'hello' && ''; // a = ''
print(a);

var b = '' && []; // b = ''
print(b);

var c = undefined && 0; // c = undefined
print(c);

var d = 1 && 5; // d = 5
print(d);

var e = 0 && {}; // e = 0
print(e);

var f = 'hi' && [] && 'done'; // f = 'done'
print(f);

var g = 'bye' && undefined && 'adios'; // g = undefined
print(g);

var foo = function (val) {
    // if val evaluates to falsey, 'default' will be returned instead.
    return val || 'default';
}
console.log(foo('burger')); // burger
console.log(foo(100)); // 100
console.log(foo([])); // []
console.log(foo(0)); // default
console.log(foo(undefined)); // default
