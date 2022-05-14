var _u = null;

function print() {
    var _con;
    (_con = console).log.apply(_con, arguments); 
}

console.group("NaN");

    _u = (1 * "two") === NaN //false
    print(_u);

    _u = NaN === 0; // false
    print(_u);

    _u = NaN === NaN; // false
    print(_u);

    _u = Number.NaN === NaN; // false
    print(_u);

    _u = NaN < 0; // false
    print(_u);

    _u = NaN > 0; // false
    print(_u);

    _u = NaN > 0; // false
    print(_u);

    _u = NaN >= NaN; // false
    print(_u);

    _u = NaN >= 'two'; // false
    print(_u);

    _u = NaN !== 0; // true
    print(_u);

    _u = NaN !== NaN; // true
    print(_u);

console.groupEnd();

console.group("Number.isNaN");

    _u = Number.isNaN({}); // falseNumber.isNaN(NaN); // true

    _u = Number.isNaN(0 / 0); // true
    print(_u);

    _u = Number.isNaN('str' - 12); // true
    print(_u);

    _u = Number.isNaN(24); // false
    print(_u);

    _u = Number.isNaN('24'); // false
    print(_u);

    _u = Number.isNaN(1 / 0); // false
    print(_u);

    _u = Number.isNaN(Infinity); // false
    print(_u);
    
    _u = Number.isNaN('str'); // false
    print(_u);

    _u = Number.isNaN(undefined); // false
    print(_u);

    _u = Number.isNaN({}); // false
    print(_u);

console.groupEnd();

console.group("isNaN");
    _u = isNaN(NaN); // true
    print(_u);

    _u = isNaN(0 / 0); // true
    print(_u);

    _u = isNaN('str' - 12); // true
    print(_u);

    _u = isNaN(24); // false
    print(_u);

    _u = isNaN('24'); // false
    print(_u);

    _u = isNaN(Infinity); // false
    print(_u);

    _u = isNaN('str'); // true
    print(_u);

    _u = isNaN(undefined); // true
    print(_u);

    _u = isNaN({}); // true
    print(_u);

console.groupEnd();


_u = Object.is(NaN, NaN) // true
print(_u);

_u = Object.is(+0, 0) // false
print(_u);

_u = NaN === NaN // false
print(_u);

_u = +0 === 0 // true
print(_u);