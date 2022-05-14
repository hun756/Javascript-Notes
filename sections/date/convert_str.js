// Convert to String
var date = new Date();
console.log(date.toString());

// Convert to Time String
console.log(date.toTimeString());

// Convert to Date String
console.log(date.toDateString());

// Convert to UTC String
console.log(date.toUTCString());

// Convert to ISO String
console.log(date.toISOString());

// Convert to GMT String
console.log(date.toGMTString());

// Convert to Locale Date String
console.log(date.toLocaleDateString());
console.log(date.toLocaleDateString(["zh", "en-US"]));

// optinal settings
var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
console.log(date.toLocaleDateString([], options));