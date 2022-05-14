function T() { // True
    console.log("T");
    return true;
}

function F() { // False
    console.log("F");
    return false;
}

if (T() && F()) {
    console.log("It is true :)");
}

if (T() || F()) {
    console.log("it looks good : T() || F()");
}

/*
    var obj; // object has value of undefined
    if (obj.property) { }// TypeError: Cannot read property 'property' of undefined
    if (obj.property && obj !== undefined) { }// Line A TypeError: Cannot read property 'property' of undefined
*/

var nullableObj = null;
var obj = nullableObj || {}; // this selects {}
var nullableObj2 = {x: 5};
var obj2 = nullableObj2 || {} // this selects {x: 5}