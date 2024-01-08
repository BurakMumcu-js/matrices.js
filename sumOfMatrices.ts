function isNumeric(value: any): boolean {
    return !isNaN(parseFloat(value)) && isFinite(value);
}

export function sumOfMatrices(matrix1: number[][], matrix2: number[][]): number[][] | null {
    const row1: number = matrix1.length;
    const col1: number = matrix1[0].length;
    const row2: number = matrix2.length;
    const col2: number = matrix2[0].length;

    // Matrislerin boyutları kontrol ediliyor
    if (row1 !== row2 || col1 !== col2) {
        console.log("Matrislerin boyutları eşleşmiyor, matrisleri toplayamazsınız.");
        return null;
    }

    // Matrisler toplanıyor
    const resultMatrix: number[][] = [];
    for (let i = 0; i < row1; i++) {
        resultMatrix[i] = [];
        for (let j = 0; j < col1; j++) {
            // Elemanların sayı olup olmadığı kontrol ediliyor
            if (isNumeric(matrix1[i][j]) && isNumeric(matrix2[i][j])) {
                resultMatrix[i][j] = matrix1[i][j] + matrix2[i][j];
            } else {
                console.log("Matris elemanları sayı değil, matrisleri toplayamazsınız.");
                return null;
            }
        }
    }

    return resultMatrix;
}
