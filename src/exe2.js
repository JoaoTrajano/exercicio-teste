"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function updateData(currentObject, newDataObject) {
    var keysCurrentObject = Object.keys(currentObject);
    var keysNewDataObject = Object.keys(newDataObject);
    var keysNewDataObjectLength = keysNewDataObject.length;
    var index = 0;
    while (index < keysNewDataObjectLength) {
        var fieldObjectSearch = keysNewDataObject[index];
        var itFoundField = keysCurrentObject.includes(fieldObjectSearch);
        if (itFoundField) {
            if (currentObject[fieldObjectSearch] === newDataObject[fieldObjectSearch]) {
                currentObject[fieldObjectSearch] = newDataObject[fieldObjectSearch];
            }
        }
        index++;
    }
    return currentObject;
}
exports.default = updateData;
