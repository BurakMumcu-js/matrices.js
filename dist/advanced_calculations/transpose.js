"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Error_1 = require("../lib/Error");
function transpose(matrice) {
    if (!matrice.every(row => row.length === matrice[0].length))
        throw Error_1.DimensionError;
    const transposeMatrice = [];
    for (let i = 0; i < matrice[0].length; i++) {
        transposeMatrice[i] = [];
        for (let j = 0; j < matrice.length; j++) {
            transposeMatrice[i][j] = matrice[j][i];
        }
    }
    return transposeMatrice;
}
