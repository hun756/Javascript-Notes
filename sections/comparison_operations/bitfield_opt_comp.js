var bitField = 0; // the value to hold the bits
const KEY_BITS = [4, 1, 8, 2]; // left up right down
const KEY_MASKS = [0b1011, 0b1110, 0b0111, 0b1101]; // left up right down
window.onkeydown = window.onkeyup = function (e) {
    if (e.keyCode >= 37 && e.keyCode < 41) {
        if (e.type === "keydown") {
            bitField |= KEY_BITS[e.keyCode - 37];
        } else {
            bitField &= KEY_MASKS[e.keyCode - 37];
        }
    }
}

var directionState = [false, false, false, false];
window.onkeydown = window.onkeyup = function (e) {
    if (e.keyCode >= 37 && e.keyCode < 41) {
        directionState[e.keyCode - 37] = e.type === "keydown";
    }
}

// postfix U,D,L,R for Up down left right
const KEY_U = 1;
const KEY_D = 2;
const KEY_L = 4;
const KEY_R = 8;
const KEY_UL = KEY_U + KEY_L; // up left
const KEY_UR = KEY_U + KEY_R; // up Right
const KEY_DL = KEY_D + KEY_L; // down left
const KEY_DR = KEY_D + KEY_R; // down right


if ((bitField & KEY_UL) === KEY_UL) { /* is UP and LEFT only down */}
if (bitField & KEY_UL) { /* is Up left down */}
if ((bitField & KEY_U) === KEY_U) { /* is Up only down*/ }
if (bitField & KEY_U) { /* is Up down (any other key may be down) */}
if (!(bitField & KEY_U)) { /* is Up up (any other key may be down) */}
if (!bitField) { /* no keys are down */}
if (bitField) { /* any one or more keys are down */}