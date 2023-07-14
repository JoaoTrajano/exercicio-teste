"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function checkIfTheFirstLetterIsUppercase(word) {
    var firstLetter = word[0].toLowerCase();
    if (firstLetter !== word[0]) {
        return true;
    }
    return false;
}
exports.default = checkIfTheFirstLetterIsUppercase;
