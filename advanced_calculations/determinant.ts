import {isNumeric} from "../lib/isNumeric";

export function calculateDeterminant (matrice: number[][]): number {
    if (!matrice.every(row => row.every(element => isNumeric(element)))) {
        throw new Error("matrice elements must be a Number");
    }
    if (matrice.length !== matrice[0].length) throw new Error("matrice must be square");
    if (matrice.length === 2 && matrice[0].length === 2) {
        return matrice[0][0] * matrice[1][1] - matrice[0][1] * matrice[1][0];
    }
    let det = 0;
    for (let i = 0; i < matrice.length; i++) {
        const katsayi = matrice[0][i];
        const altMatris = matrice.slice(1).map(row => row.filter((_, j) => j !== i));
        det += katsayi * calculateDeterminant(altMatris) * (i % 2 === 0 ? 1 : -1);
    }
    return det;
}
