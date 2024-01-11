import {isMatriceNumeric} from "../lib/isNumeric";
import {DimensionError, NumericError} from "../lib/Error";

export function subtractMatrices(matrice1: number[][], matrice2: number[][]): number[][] | null {
    const row1: number = matrice1.length;
    const col1: number = matrice1[0].length;
    const row2: number = matrice2.length;
    const col2: number = matrice2[0].length;

    if (!isMatriceNumeric(matrice1) || !isMatriceNumeric(matrice2)) throw NumericError;

    if (row1 !== row2 || col1 !== col2) {
        throw DimensionError;
    }

    const resultMatrice: number[][] = [];
    for (let i = 0; i < row1; i++) {
        resultMatrice[i] = [];
        for (let j = 0; j < col1; j++) {
                resultMatrice[i][j] = matrice1[i][j] - matrice2[i][j];
        }
    }

    return resultMatrice;
}