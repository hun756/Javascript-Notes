//We want this function to take the sum of the numbers passed to it
//It can be called as sum(1, 2, 3) or sum([1, 2, 3]) and should give 6
function sum(...args) {
    if (args.length === 1) {
        const [firstArg] = args
        if (firstArg instanceof Array) { //firstArg is something like [1, 2, 3]
            return sum(...firstArg) //calls sum(1, 2, 3)
        }
    }
    return args.reduce((a, b) => a + b)
}

console.log(sum(1, 2, 3)) //6
console.log(sum([1, 2, 3])) //6
console.log(sum(4)) //4

console.log(2 instanceof Number) //false
console.log('abc' instanceof String) //false
console.log(true instanceof Boolean) //false
console.log(Symbol() instanceof Symbol) //false

//Whereas instanceof also catches instances of subclasses,
//using obj.constructor does not
console.log([] instanceof Object, [] instanceof Array) //true true
console.log([].constructor === Object, [].constructor === Array) //false true
function isNumber(value) {
    //null.constructor and undefined.constructor throw an error when accessed
    if (value === null || value === undefined) return false
    return value.constructor === Number
}
console.log(isNumber(null), isNumber(undefined)) //false false
console.log(isNumber('abc'), isNumber([]), isNumber(() => 1)) //false false false
console.log(isNumber(0), isNumber(Number('10.1')), isNumber(NaN)) //true true true