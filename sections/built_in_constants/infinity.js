var _u;

_u = Infinity > 123192310293; // true
console.log(_u);


_u = -Infinity < -123192310293; // true
console.log(_u);

_u = 1 / 0; // Infinity
console.log(_u);

_u = Math.pow(123123123, 9123192391023); // Infinity
console.log(_u);

_u = Number.MAX_VALUE * 2; // Infinity
console.log(_u);

_u = 23 / Infinity; // 0
console.log(_u);

_u = -Infinity; // -Infinity
console.log(_u);

_u = -Infinity === Number.NEGATIVE_INFINITY; // true
console.log(_u);

_u = -0; // -0 , yes there is a negative 0 in the language
console.log(_u);

_u = 0 === -0; // true
console.log(_u);

_u = 1 / -0; // -Infinity
console.log(_u);

_u = 1 / 0 === 1 / -0; // false
console.log(_u);

_u = Infinity + Infinity; // Infinity
console.log(_u);

var a = 0, b = -0;
_u = a === b; // true
console.log(_u);

_u = 1 / a === 1 / b; // false
console.log(_u);
// Try your own!