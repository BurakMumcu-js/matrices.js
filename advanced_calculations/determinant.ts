import {isMatriceNumeric, isNumeric} from "../lib/isNumeric";
import {DimensionError, NumericError} from "../lib/Error";

export function calculateDeterminant(matrice: number[][]): number {
    if (!isMatriceNumeric(matrice)) throw NumericError;

    if (matrice.length !== matrice[0].length) throw DimensionError;
    if (matrice.length === 2 && matrice[0].length === 2) {
        return matrice[0][0] * matrice[1][1] - matrice[0][1] * matrice[1][0];
    }
    let det = 0;
    for (let i = 0; i < matrice.length; i++) {
        const coefficient = matrice[0][i];
        const lower_matrice = matrice.slice(1).map(row => row.filter((_, j) => j !== i));
        det += coefficient * calculateDeterminant(lower_matrice) * (i % 2 === 0 ? 1 : -1);
    }
    return det;
}
