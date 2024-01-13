"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.multiplyOneMatrice = exports.multiply = void 0;
const isNumeric_1 = require("../lib/isNumeric");
const Error_1 = require("../lib/Error");
function multiply(matrice1, matrice2) {
    if (matrice1 == null || matrice2 == null)
        throw Error_1.DimensionError;
    const row1 = matrice1.length;
    const col1 = matrice1[0].length;
    const row2 = matrice2.length;
    const col2 = matrice2[0].length;
    if (!(0, isNumeric_1.isMatriceNumeric)(matrice1) || !(0, isNumeric_1.isMatriceNumeric)(matrice2))
        throw Error_1.NumericError;
    if (col1 !== row2)
        throw Error_1.DimensionError;
    const resultMatrix = [];
    for (let i = 0; i < row1; i++) {
        resultMatrix[i] = [];
        for (let j = 0; j < col2; j++) {
            resultMatrix[i][j] = 0;
            for (let k = 0; k < col1; k++) {
                resultMatrix[i][j] += matrice1[i][k] * matrice2[k][j];
            }
        }
    }
    return resultMatrix;
}
exports.multiply = multiply;
function multiplyOneMatrice(matrice, num) {
    if (!(0, isNumeric_1.isMatriceNumeric)(matrice) || !(0, isNumeric_1.isNumeric)(num))
        throw Error_1.NumericError;
    const multiplied_matrice = matrice.map(row => row.map(element => element * num));
    return multiplied_matrice;
}
exports.multiplyOneMatrice = multiplyOneMatrice;
