console.log(Object.prototype.toString.call("String"));

console.log(Object.prototype.toString.call(42));

console.log(Object.prototype.toString.call(true));

console.log(Object.prototype.toString.call(Boolean()));

console.log(Object.prototype.toString.call(Object()),
    Object.prototype.toString.call({})
);

console.log(Object.prototype.toString.call(function(){}));

console.log(Object.prototype.toString.call(new Date(2015,10,21)));

console.log(Object.prototype.toString.call(new RegExp()) ,Object.prototype.toString.call(/foo/));

console.log(Object.prototype.toString.call([]));

console.log(Object.prototype.toString.call(undefined));

console.log(Object.prototype.toString.call(Error()));

class Myclass {};

const a = new Myclass;

console.log(Object.prototype.toString.call(a));
console.log(Object.prototype.toString.call(Myclass));