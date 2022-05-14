// It is a property of the global object, and a reference to Number.NaN
var a = window.hasOwnProperty('NaN'); // true
console.log(a);

console.log(NaN); // NaN
console.log("type of NaN : " ,typeof NaN);

if (NaN == NaN) {

} else {
    console.log("Nan == NaN --> false"); //
}

if (NaN === NaN) {

} else {
    console.log("Nan === NaN --> false")
}