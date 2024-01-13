# matrices.js

A simple NPM package for matrix operations.

---

## Installation

```bash
npm install matrices.js
```

## Usage
```
const matrixOps = require('matrices.js');

// Example usage
const matrixA = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

const matrixB = [
  [9, 8, 7],
  [6, 5, 4],
  [3, 2, 1]
];

// Matrix Addition
const resultAddition = matrixOps.sum(matrixA, matrixB);
console.log('Matrix Addition:', resultAddition);

// Matrix Subtraction
const resultSubtraction = matrixOps.subtract(matrixA, matrixB);
console.log('Matrix Subtraction:', resultSubtraction);

// Matrix Multiplication for two matrice
const resultMultiplication = matrixOps.multiply(matrixA, matrixB);
console.log('Matrix Multiplication:', resultMultiplication);

// Matrix Multiplication for one matrice and one number
const num = 2
const resultMultiplication2 = matrixOps.multiplyOneMatrice(matrixA,num);
console.log('Matrix Multiplication:', resultMultiplication2);

// Transpose Matrix
const resultTranspose = matrixOps.transpose(matrixA);
console.log('Transpose Matrix:', resultTranspose);

// Inverse Matrix
const resultOpposite = matrixOps.inverse(matrixA);
console.log('Inverse Matrix:', resultOpposite);

// Determinant of a Matrix
const resultDeterminant = matrixOps.determinant(matrixA);
console.log('Determinant of Matrix:', resultDeterminant);

// Matrix Power
const power = 2;
const resultMatrixPower = matrixOps.power(matrixA, power);
console.log(`Matrix to the power of ${power}:`, resultMatrixPower);
```

## API

sum(matrixA: number[][], matrixB: number[][]): number[][]: Returns the sum of two matrices.  
subtract(matrixA: number[][], matrixB: number[][]): number[][]: Returns the difference between two matrices.  
multiply(matrixA: number[][], matrixB: number[][]): number[][]: Returns the product of two matrices.  
multiply(matrixA: number[][],num: number): number[][]: Returns the product of a matrice and a number
transpose(matrix: number[][]): number[][]: Returns the transpose of a matrice.  
inverse(matrix: number[][]): number[][] | null: Returns the inverse of a matrice. 
determinant(matrix: number[][]): number | null: Returns the determinant of a matrice.
power(matrix: number[][], power: number): number[][] | null: Returns the matrice raised to the specified power.  


# matrices.js

Matris işlemleri için basit bir NPM paketi.

---

## Kurulum

```bash
npm install matrices.js
```

## Usage
```
const matrixOps = require('matrices.js');

Örnek Kullanım
const matrixA = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

const matrixB = [
  [9, 8, 7],
  [6, 5, 4],
  [3, 2, 1]
];

// Matris Toplama
const resultAddition = matrixOps.sum(matrixA, matrixB);
console.log('Matrix Addition:', resultAddition);

// Matris Çıkarma
const resultSubtraction = matrixOps.subtract(matrixA, matrixB);
console.log('Matrix Subtraction:', resultSubtraction);

// İki Matrisi Çarpma
const resultMultiplication = matrixOps.multiply(matrixA, matrixB);
console.log('Matrix Multiplication:', resultMultiplication);

// Bir Matrisi sayıyla çarpma
const num = 2
const resultMultiplication2 = matrixOps.multiply(matrixA,num);
console.log('Matrix Multiplication:', resultMultiplication2);

// Matrisin Transpozunu alma
const resultTranspose = matrixOps.transpose(matrixA);
console.log('Transpose Matrix:', resultTranspose);

// Matrisin Tersini alma
const resultOpposite = matrixOps.inverse(matrixA);
console.log('Inverse Matrix:', resultOpposite);

// Matrisin Determinantını alma
const resultDeterminant = matrixOps.determinant(matrixA);
console.log('Determinant of Matrix:', resultDeterminant);

// Matrisin üssünü alma
const power = 2;
const resultMatrixPower = matrixOps.power(matrixA, power);
console.log(`Matrix to the power of ${power}:`, resultMatrixPower);
```

## API

sum(matrixA: number[][], matrixB: number[][]): number[][]: İki matrisin toplamını döndürür.  
subtract(matrixA: number[][], matrixB: number[][]): number[][]: İki matris arasındaki farkı döndürür. 
multiply(matrixA: number[][], matrixB: number[][]): number[][]: İki matrisin çarpımını döndürür.  
multiplyOneMatrice(matrixA: number[][],num: number): number[][]: Bir matris ile bir sayının çarpımını döndürür
transpose(matrix: number[][]): number[][]:  Bir matrisin transpozunu döndürür. 
inverse(matrix: number[][]): number[][] | null: Bir matrisin tersini döndürür.
determinant(matrix: number[][]): number | null: Bir matrisin determinantını döndürür.
power(matrix: number[][], power: number): number[][] | null: Bir matrisin belirtilen üssünü döndürür  
