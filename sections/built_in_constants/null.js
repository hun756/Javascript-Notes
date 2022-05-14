
console.group("Null vs undeifined comparison");

if (null == undefined) {
    console.log("yes it is true : null == undefined");
}

if (null === undefined) {
    console.log("yes it is true : null === undefined");
} else {
    console.log("no it's not true : null === undefined");
}

console.groupEnd();


console.group("Type of null");

console.log("Type of null : ", typeof null);

console.groupEnd();