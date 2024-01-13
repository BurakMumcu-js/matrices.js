"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.subtract = void 0;
const isNumeric_1 = require("../lib/isNumeric");
const Error_1 = require("../lib/Error");
function subtract(matrice1, matrice2) {
    const row1 = matrice1.length;
    const col1 = matrice1[0].length;
    const row2 = matrice2.length;
    const col2 = matrice2[0].length;
    if (!(0, isNumeric_1.isMatriceNumeric)(matrice1) || !(0, isNumeric_1.isMatriceNumeric)(matrice2))
        throw Error_1.NumericError;
    if (row1 !== row2 || col1 !== col2) {
        throw Error_1.DimensionError;
    }
    const resultMatrice = [];
    for (let i = 0; i < row1; i++) {
        resultMatrice[i] = [];
        for (let j = 0; j < col1; j++) {
            resultMatrice[i][j] = matrice1[i][j] - matrice2[i][j];
        }
    }
    return resultMatrice;
}
exports.subtract = subtract;
