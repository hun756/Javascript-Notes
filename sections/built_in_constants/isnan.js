var a;
print = (val) => {console.log(val);}

// true
a = isNaN(NaN);
print(a);

// false: 1 is a number
a = isNaN(1); 
print(a);

// false: -2e-4 is a number (-0.0002) in scientific notation
a = isNaN(-2e-4); 
print(a);

// false: Infinity is a number
a = isNaN(Infinity); 
print(a);

// false: converted to 1, which is a number
a = isNaN(true); 
print(a);

// false: converted to 0, which is a number
a = isNaN(false); 
print(a);

// false: converted to 0, which is a number
a = isNaN(null); 
print(a);

// false: converted to 0, which is a number
a = isNaN(""); 
print(a);

// false: converted to 0, which is a number
a = isNaN(" "); 
print(a);

// false: string representing a number, converted to 45.3
a = isNaN("45.3"); 
print(a);

// false: string representing a number, converted to 1.2e3
a = isNaN("1.2e3"); 
print(a);

// false: string representing a number, converted to Infinity
a = isNaN("Infinity"); 
print(a);

// false: Date object, converted to milliseconds since epoch
a = isNaN(new Date); 
print(a);

// true : conversion fails, the dollar sign is not a digit
a = isNaN("10$"); 
print(a);

// true : conversion fails, no digits at all
a = isNaN("hello"); 
print(a);

// true : converted to NaN
a = isNaN(undefined); 
print(a);

// true : converted to NaN (implicitly undefined)
a = isNaN(); 
print(a);

// true : conversion fails
a = isNaN(function(){}); 
print(a);

// true : conversion fails
a = isNaN({}); 
print(a);

// true : converted to "1, 2", which can't be converted to a number
a = isNaN([1, 2]); 
print(a);