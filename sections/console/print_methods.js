/*
 * console.info – small informative icon (ⓘ) appears on the left side of the printed string(s) or object(s).
 * console.warn – small warning icon (!) appears on the left side. In some browsers, the background of the log
 * is yellow.
 * console.error – small times icon (⊗) appears on the left side. In some browsers, the background of the log is
 * red.
 * console.timeStamp – outputs the current time and a specified string, but is non-standard:
 */
console.timeStamp('This is a timestamp');

console.info("This is a info message");

console.warn("This is a warning message");

console.error("This is a error message");

/** console trace */
function sec() {
    first();
}
function first() {
    console.trace();
}
sec();