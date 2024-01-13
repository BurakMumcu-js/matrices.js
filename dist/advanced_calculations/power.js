"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.power = void 0;
const Error_1 = require("../lib/Error");
const isNumeric_1 = require("../lib/isNumeric");
const multiply_1 = require("../basic_calculations/multiply");
function power(matrice, power) {
    if (matrice.length !== matrice[0].length)
        throw Error_1.DimensionError;
    if (!(0, isNumeric_1.isMatriceNumeric)(matrice))
        throw Error_1.NumericError;
    if (power < 0) {
        new Error_1.ResponseError("Power must be positive");
    }
    // Matrisin üssünü al
    let result = matrice;
    for (let i = 1; i < power; i++) {
        result = (0, multiply_1.multiply)(result, matrice);
    }
    return result;
}
exports.power = power;
