"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DimensionError = exports.NumericError = exports.ResponseError = void 0;
class ResponseError extends Error {
    constructor(message) {
        super(message);
    }
}
exports.ResponseError = ResponseError;
exports.NumericError = new ResponseError("Matrix elements are not numbers");
exports.DimensionError = new ResponseError("You cannot perform operations because the matrix size is not suitable");
