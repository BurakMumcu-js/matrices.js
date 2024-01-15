import {DimensionError} from "../lib/Error";

export function transpose(matrice: number[][]): number[][] {

    if (!matrice.every(row => row.length === matrice[0].length)) throw DimensionError

    const transposeMatrice: number[][] = [];

    for (let i = 0; i < matrice[0].length; i++) {
        transposeMatrice[i] = [];

        for (let j = 0; j < matrice.length; j++) {
            transposeMatrice[i][j] = matrice[j][i];
        }
    }

    return transposeMatrice;
}