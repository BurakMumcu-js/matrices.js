export function isNumeric(value: any): boolean {
    return !isNaN(parseFloat(value)) && isFinite(value);
}


export function isMatriceNumeric(matrice: any[][]): boolean {
    return matrice.every(row => row.every(element => isNumeric(element)));
}