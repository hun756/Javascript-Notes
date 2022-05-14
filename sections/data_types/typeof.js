
const print = (str, fn) => {
    console.group(str);
    fn();
    console.groupEnd();
}

print("string", () => {
    console.log(typeof "String");
    console.log(typeof Date(2022, 05, 14));
});

print("number", () => {
    console.log(typeof 42);
    console.log(typeof 0.64563454);
    console.log(typeof +"12.3");
});

print("boolean", () => {
    console.log(typeof false);
    console.log(typeof true);
    console.log(typeof Boolean());
    // console.log(typeof new Boolean);     // object
    // console.log(typeof new Boolean("")); // object
});

print("object", () => {
    console.log(typeof {});
    console.log(typeof []);
    console.log(typeof null);
    console.log(typeof /aaa/); // regex
    console.log(typeof new Error());
    console.log(typeof Error());
    console.log(typeof new Boolean);
    console.log(typeof new Date());
});

print("function", () => {
    console.log(typeof function(){});
    var fn = () => {}
    console.log(typeof fn);
    console.log(typeof Function)
});

print("undefined", () => {
    console.log(typeof undefined);
    console.log(typeof void 0);
    var a;
    console.log(typeof a);
});