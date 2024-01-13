"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.inverse = void 0;
const determinant_1 = require("./determinant");
function inverse(matrice) {
    const det = (0, determinant_1.determinant)(matrice);
    if (det === 0)
        throw new Error("Since the determinant is zero, its inverse cannot be found.");
    const n = matrice.length;
    const matrice_inverse = new Array(n);
    for (let i = 0; i < n; i++) {
        matrice_inverse[i] = new Array(n).fill(0);
    }
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            const coefficient = matrice[i][j];
            const lower_matrice = matrice
                .filter((_, k) => k !== i)
                .map(row => row.filter((_, l) => l !== j));
            matrice_inverse[j][i] = coefficient * Math.pow(-1, i + j) * (0, determinant_1.determinant)(lower_matrice) / det;
        }
    }
    return matrice_inverse;
}
exports.inverse = inverse;
