import {isNumeric} from "../lib/isNumeric";

export function multiplyMatrices(matrix1: number[][], matrix2: number[][]): number[][] | null {
    const row1: number = matrix1.length;
    const col1: number = matrix1[0].length;
    const row2: number = matrix2.length;
    const col2: number = matrix2[0].length;

    if (col1 !== row2) {
        throw new Error("Matrices do not have multiplicative dimensions, you cannot multiply matrices.");
    }

    const resultMatrix: number[][] = [];
    for (let i = 0; i < row1; i++) {
        resultMatrix[i] = [];
        for (let j = 0; j < col2; j++) {
            resultMatrix[i][j] = 0;
            if (isNumeric(matrix1[i][j]) && isNumeric(matrix2[i][j])) {
                for (let k = 0; k < col1; k++) {
                    resultMatrix[i][j] += matrix1[i][k] * matrix2[k][j];
                }
            } else {
                throw new Error("Matrix elements are not numbers, you cannot multiply them")
            }
        }
    }
    return resultMatrix;
}
