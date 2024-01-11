import {isMatriceNumeric, isNumeric} from "../lib/isNumeric";
import {DimensionError, NumericError} from "../lib/Error";

export function multiplyMatrices(matrice1: number[][], matrice2: number[][]): number[][] | null {
    const row1: number = matrice1.length;
    const col1: number = matrice1[0].length;
    const row2: number = matrice2.length;
    const col2: number = matrice2[0].length;

    if (!isMatriceNumeric(matrice1) || !isMatriceNumeric(matrice2)) throw NumericError;

    if (col1 !== row2) throw DimensionError;

    const resultMatrix: number[][] = [];
    for (let i = 0; i < row1; i++) {
        resultMatrix[i] = [];
        for (let j = 0; j < col2; j++) {
            resultMatrix[i][j] = 0;
                for (let k = 0; k < col1; k++) {
                    resultMatrix[i][j] += matrice1[i][k] * matrice2[k][j];
                }
        }
    }
    return resultMatrix;
}

export function multiplyOneMatrice(matrice:number[][], num:number):number[][]{
    if (!isMatriceNumeric(matrice) || !isNumeric(num)) throw NumericError;

    const multiplied_matrice = matrice.map(row => row.map(element => element * num));

    return multiplied_matrice;
}
