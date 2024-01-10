export class ResponseError extends Error {
    constructor(message: string) {
        super(message);
    }
}

export const NumericError = new ResponseError("Matrix elements are not numbers");
export const DimensionError = new ResponseError("You cannot perform operations because the matrix size is not suitable");

