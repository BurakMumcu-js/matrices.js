"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isMatriceNumeric = exports.isNumeric = void 0;
function isNumeric(value) {
    return !isNaN(parseFloat(value)) && isFinite(value);
}
exports.isNumeric = isNumeric;
function isMatriceNumeric(matrice) {
    return matrice.every(row => row.every(element => isNumeric(element)));
}
exports.isMatriceNumeric = isMatriceNumeric;
