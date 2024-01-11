import {isMatriceNumeric, isNumeric} from "../lib/isNumeric";
import {DimensionError, NumericError} from "../lib/Error";

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
           throw DimensionError;
        }
    }

    for (const matrice of matrices) {
      if (!isMatriceNumeric(matrice)) throw NumericError;
    }

    const resultMatrice: number[][] = [];
    for (let i = 0; i < row1; i++) {
        resultMatrice[i] = [];
        for (let j = 0; j < col1; j++) {
            resultMatrice[i][j] = matrices.reduce((sum, matrice) => sum + matrice[i][j], 0);
        }
    }

    return resultMatrice;
}
