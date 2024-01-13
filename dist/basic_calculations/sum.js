"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sum = void 0;
const isNumeric_1 = require("../lib/isNumeric");
const Error_1 = require("../lib/Error");
function sum(...matrices) {
    if (matrices.length < 2) {
        throw new Error("You must enter at least 2 matrices");
    }
    const row1 = matrices[0].length;
    const col1 = matrices[0][0].length;
    for (let i = 1; i < matrices.length; i++) {
        const row = matrices[i].length;
        const col = matrices[i][0].length;
        if (row !== row1 || col !== col1) {
            throw Error_1.DimensionError;
        }
    }
    for (const matrice of matrices) {
        if (!(0, isNumeric_1.isMatriceNumeric)(matrice))
            throw Error_1.NumericError;
    }
    const resultMatrice = [];
    for (let i = 0; i < row1; i++) {
        resultMatrice[i] = [];
        for (let j = 0; j < col1; j++) {
            resultMatrice[i][j] = matrices.reduce((sum, matrice) => sum + matrice[i][j], 0);
        }
    }
    return resultMatrice;
}
exports.sum = sum;
