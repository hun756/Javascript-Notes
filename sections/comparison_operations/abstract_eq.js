var _o = function () {
    var _a;
    (_a = console).log.apply(_a, arguments);
}

var _v = null;

_v = 1 == 1; // true
_o(_v);

_v = 1 == true; // true (operand converted to number: true => 1)
_o(_v);

_v = 1 == '1'; // true (operand converted to number: '1' => 1 )
_o(_v);

_v = 1 == '1.00'; // true
_o(_v);

_v = 1 == '1.00000000001'; // false
_o(_v);

_v = 1 == '1.00000000000000001'; // true (true due to precision loss)
_o(_v);

_v = null == undefined; // true (spec #2)
_o(_v);

_v = 1 == 2; // false
_o(_v);

_v = 0 == false; // true
_o(_v);

_v = 0 == undefined; // false
_o(_v);

_v = 0 == ""; // true
_o(_v);