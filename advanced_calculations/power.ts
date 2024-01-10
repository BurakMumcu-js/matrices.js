import {DimensionError, NumericError,ResponseError} from "../lib/Error";
import {isMatrisNumeric} from "../lib/isNumeric";
import {multiplyMatrices} from "../four_transactions/multiply";

export function powerOfMatrice(matrice: number[][], power: number): number[][] | null {

    if (matrice.length !== matrice[0].length) throw DimensionError;

    if (!isMatrisNumeric(matrice)) throw NumericError;

    if (power < 0) {
         new ResponseError("Power must be positive");
    }

    // Matrisin üssünü al
    let result: number[][] = matrice;

    for (let i = 1; i < power; i++) {
        result = multiplyMatrices(result, matrice);
    }
    return result;
}

