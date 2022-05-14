// Get the current year
var year = (new Date()).getFullYear();
console.log(year);
// Sample output: 2016

// Get the current month
var month = (new Date()).getMonth();
console.log(month);
// Sample output: 0

// Get the current day
var day = (new Date()).getDate();
console.log(day);
// Sample output: 31

// Get the current hour
var hours = (new Date()).getHours();
console.log(hours);
// Sample output: 10

// get the current minutes
var minutes = (new Date()).getMinutes();
console.log(minutes);
// Sample output: 39

// Get the current seconds
var seconds = (new Date()).getSeconds();
console.log(seconds);
// Sample output: 48

// Get the current milliseconds
var milliseconds = (new Date()).getMilliseconds();
console.log(milliseconds);
// Output: milliseconds right now

// Convert the current time and date to a human-readable string
var now = new Date();
// convert date to a string in UTC timezone format:
console.log(now.toUTCString());
// Output: Wed, 21 Jun 2017 09:13:01 GMT

// get milliseconds using static method now of Date
console.log(+Date.now());

// get milliseconds using method getTime of Date instance
console.log(+(new Date()).getTime());