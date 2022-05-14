var a;
var print = (val) => {console.log(val);}

// The one and only
a = Number.isNaN(NaN); // true
print(a);
// Numbers
a = Number.isNaN(1); // false
print(a);

a = Number.isNaN(-2e-4); // false
print(a);

a = Number.isNaN(Infinity); // false
print(a);

// Values not of type number
a = Number.isNaN(true); // false
print(a);

a = Number.isNaN(false); // false
print(a);

a = Number.isNaN(null); // false
print(a);

a = Number.isNaN(""); // false
print(a);

a = Number.isNaN(" "); // false
print(a);

a = Number.isNaN("45.3"); // false
print(a);

a = Number.isNaN("1.2e3"); // false
print(a);

a = Number.isNaN("Infinity"); // false
print(a);

a = Number.isNaN(new Date); // false
print(a);

a = Number.isNaN("10$"); // false
print(a);

a = Number.isNaN("hello"); // false
print(a);

a = Number.isNaN(undefined); // false
print(a);

a = Number.isNaN(); // false
print(a);

a = Number.isNaN(function(){}); // false
print(a);

a = Number.isNaN({}); // false
print(a);

a = Number.isNaN([]); // false
print(a);

a = Number.isNaN([1]); // false
print(a);

a = Number.isNaN([1, 2]); // false
print(a);

a = Number.isNaN([true]); // false
print(a);