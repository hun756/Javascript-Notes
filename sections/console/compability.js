if (typeof window.console !== 'undefined') {
    console.log("Hello World");
}

if (!window.console) {
    console = { log: function () { } };
}