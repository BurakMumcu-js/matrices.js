import {isNumeric} from "../lib/isNumeric";

export function sumMultipleMatrices(...matrices: number[][][]): number[][] | null {
    if (matrices.length < 2) {
        throw new Error("You must enter at least 2 matrices")
    }

    const row1: number = matrices[0].length;
    const col1: number = matrices[0][0].length;

    for (let i = 1; i < matrices.length; i++) {
        const row: number = matrices[i].length;
        const col: number = matrices[i][0].length;

        if (row !== row1 || col !== col1) {
           throw new Error("The sizes of the matrices do not match, you cannot add the matrices.")
        }
    }

    for (const matrix of matrices) {
        for (let i = 0; i < row1; i++) {
            for (let j = 0; j < col1; j++) {
                if (!isNumeric(matrix[i][j])) {
                    throw new Error("Matrix elements are not numbers, you cannot add matrices.")
                }
            }
        }
    }

    const resultMatrix: number[][] = [];
    for (let i = 0; i < row1; i++) {
        resultMatrix[i] = [];
        for (let j = 0; j < col1; j++) {
            resultMatrix[i][j] = matrices.reduce((sum, matrix) => sum + matrix[i][j], 0);
        }
    }

    return resultMatrix;
}
