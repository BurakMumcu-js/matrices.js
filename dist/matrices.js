"use strict";
const sum_1 = require("./basic_calculations/sum");
const subtraction_1 = require("./basic_calculations/subtraction");
const multiply_1 = require("./basic_calculations/multiply");
const determinant_1 = require("./advanced_calculations/determinant");
const inverse_1 = require("./advanced_calculations/inverse");
const power_1 = require("./advanced_calculations/power");
const transpose_1 = require("./advanced_calculations/transpose");
const matrice = {
    sum: sum_1.sum,
    subtract: subtraction_1.subtract,
    multiply: multiply_1.multiply,
    determinant: determinant_1.determinant,
    inverse: inverse_1.inverse,
    power: power_1.power,
    transpose: transpose_1.transpose,
};
module.exports = matrice;
