import {isNumeric} from "../lib/isNumeric";

export function subtractMatrices(matrix1: number[][], matrix2: number[][]): number[][] | null {
    const row1: number = matrix1.length;
    const col1: number = matrix1[0].length;
    const row2: number = matrix2.length;
    const col2: number = matrix2[0].length;

    if (row1 !== row2 || col1 !== col2) {
        throw new Error("You can't take the difference of these two matrices");
    }

    const resultMatrix: number[][] = [];
    for (let i = 0; i < row1; i++) {
        resultMatrix[i] = [];
        for (let j = 0; j < col1; j++) {
            if (isNumeric(matrix1[i][j]) && isNumeric(matrix2[i][j])) {
                resultMatrix[i][j] = matrix1[i][j] - matrix2[i][j];
            } else {
                throw new Error("Matrix elements are not numbers, you cannot take the difference of these two matrices");
            }
        }
    }

    return resultMatrix;
}