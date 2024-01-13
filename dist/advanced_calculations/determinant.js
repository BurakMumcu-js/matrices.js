"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.determinant = void 0;
const isNumeric_1 = require("../lib/isNumeric");
const Error_1 = require("../lib/Error");
function determinant(matrice) {
    if (!(0, isNumeric_1.isMatriceNumeric)(matrice))
        throw Error_1.NumericError;
    if (matrice.length !== matrice[0].length)
        throw Error_1.DimensionError;
    if (matrice.length === 2 && matrice[0].length === 2) {
        return matrice[0][0] * matrice[1][1] - matrice[0][1] * matrice[1][0];
    }
    let det = 0;
    for (let i = 0; i < matrice.length; i++) {
        const coefficient = matrice[0][i];
        const lower_matrice = matrice.slice(1).map(row => row.filter((_, j) => j !== i));
        det += coefficient * determinant(lower_matrice) * (i % 2 === 0 ? 1 : -1);
    }
    return det;
}
exports.determinant = determinant;
