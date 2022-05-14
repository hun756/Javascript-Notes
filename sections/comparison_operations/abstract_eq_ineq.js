console.group("First");

    console.log('"" == 0 => ', "" == 0);
    console.log('0 == "0" => ', 0 == "0");
    console.log('"" == "0" => ', "" == "0");
    console.log('false == 0 => ', false == 0);
    console.log('false == "0" => ', false == "0");

console.groupEnd();

console.group("Second");

    console.log('"" != 0 => ', "" != 0);
    console.log('0 != "0" => ', 0 != "0");
    console.log('"" != "0" => ', "" != "0");
    console.log('false != 0 => ', false != 0);
    console.log('false != "0" => ', false != "0");

console.groupEnd();

console.log(Number(""));
console.log(Number("0"));
console.log(Number(false));

console.log(Number("0") == Number("0"));

// strict equality
console.group("Strict Equality :")

    console.log('"" === 0 => ', "" === 0);
    console.log('0 === "0" => ', 0 === "0");
    console.log('"" === "0" => ', "" === "0");

console.groupEnd();