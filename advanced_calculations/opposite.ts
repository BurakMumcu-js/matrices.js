import {calculateDeterminant} from './determinant'

export function calculateOpposite(matrice: number[][]): number[][] | null {
    const determinant = calculateDeterminant(matrice)
    if (determinant === 0) throw new Error("Since the determinant is zero, its inverse cannot be found.")
    const n = matrice.length;
    const matrisTersi: number[][] = new Array(n);
    for (let i = 0; i < n; i++) {
        matrisTersi[i] = new Array(n).fill(0);
    }
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            const katsayi = matrice[i][j];
            const altMatris = matrice
                .filter((_, k) => k !== i)
                .map(row => row.filter((_, l) => l !== j));

            matrisTersi[j][i] = katsayi * Math.pow(-1, i + j) * calculateDeterminant(altMatris) / determinant;
        }
    }
    return matrisTersi;
}
