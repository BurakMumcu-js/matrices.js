import {DimensionError, NumericError,ResponseError} from "../lib/Error";
import {isMatriceNumeric} from "../lib/isNumeric";
import {multiply} from "../basic_calculations/multiply";

export function power(matrice: number[][], power: number): number[][] | null {

    if (matrice.length !== matrice[0].length) throw DimensionError;

    if (!isMatriceNumeric(matrice)) throw NumericError;

    if (power < 0) {
         new ResponseError("Power must be positive");
    }

    // Matrisin üssünü al
    let result: number[][] | null = matrice;

    for (let i = 1; i < power; i++) {
        result = multiply(result, matrice);
    }
    return result;
}

