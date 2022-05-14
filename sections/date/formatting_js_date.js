/*
 * localeMatcher : possible values are "lookup" and "best fit"; the default is "best fit"
 * timeZone : the only value implementations must recognize is "UTC"; the default is the runtime's default time
 * zone
 * hour12 :possible values are true and false; the default is locale dependent
 * formatMatcher : possible values are "basic" and "best fit"; the default is "best fit"
 * weekday : possible values are "narrow", "short" & "long"
 * era : possible values are "narrow", "short" & "long"
 * year : possible values are "numeric" & "2-digit"
 * month : possible values are "numeric", "2-digit", "narrow", "short" & "long"
 * day : possible values are "numeric" & "2-digit"
 * hour : possible values are "numeric" & "2-digit"
 * minute : possible values are "numeric" & "2-digit"
 * second : possible values are "numeric" & "2-digit"
 * timeZoneName : possible values are "short" & "long"
 */
var today = new Date().toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'short',
    year: 'numeric'
});

console.log(today);

// Going custom
var DateObject = (function () {
    var monthNames = [
        "January", "February", "March",
        "April", "May", "June", "July",
        "August", "September", "October",
        "November", "December"
    ];
    class date {
        constructor(str) {
            this.set(str);
        }
        set(str) {
            var dateDef = str ? new Date(str) : new Date();
            this.day = dateDef.getDate();
            this.dayPadded = (this.day < 10) ? ("0" + this.day) : "" + this.day;
            this.month = dateDef.getMonth() + 1;
            this.monthPadded = (this.month < 10) ? ("0" + this.month) : "" + this.month;
            this.monthName = monthNames[this.month - 1];
            this.year = dateDef.getFullYear();
        }
        get(properties, separator) {
            var separator = separator ? separator : '-';
            ret = [];
            for (var i in properties) {
                ret.push(this[properties[i]]);
            }
            return ret.join(separator);
        }
    }
    return date;
})();

console.log(new DateObject);