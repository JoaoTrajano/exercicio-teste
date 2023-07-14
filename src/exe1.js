"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function maskify(string) {
    if (string.length === 0) {
        return "";
    }
    var limitString = string.length - 4;
    var newString = string;
    for (var index = 0; index < limitString; index++) {
        newString = newString.substring(0, index) + "#" + newString.substring(index + 1);
    }
    return newString;
}
exports.default = maskify;
