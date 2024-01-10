import {calculateDeterminant} from './determinant'

export function calculateOpposite(matrice: number[][]): number[][] | null {
    const determinant = calculateDeterminant(matrice)
    if (determinant === 0) throw new Error("Since the determinant is zero, its inverse cannot be found.")
    const n = matrice.length;
    const matrice_inverse: number[][] = new Array(n);
    for (let i = 0; i < n; i++) {
        matrice_inverse[i] = new Array(n).fill(0);
    }
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            const coefficient = matrice[i][j];
            const lower_matrice = matrice
                .filter((_, k) => k !== i)
                .map(row => row.filter((_, l) => l !== j));

            matrice_inverse[j][i] = coefficient * Math.pow(-1, i + j) * calculateDeterminant(lower_matrice) / determinant;
        }
    }
    return matrice_inverse;
}
