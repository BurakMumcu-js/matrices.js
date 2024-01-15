import { sum } from './basic_calculations/sum';
import { subtract } from './basic_calculations/subtraction';
import { multiply } from './basic_calculations/multiply';
import { determinant } from './advanced_calculations/determinant';
import { inverse } from './advanced_calculations/inverse';
import { power } from './advanced_calculations/power';
import { transpose } from './advanced_calculations/transpose';
declare const matrice: {
    sum: typeof sum;
    subtract: typeof subtract;
    multiply: typeof multiply;
    determinant: typeof determinant;
    inverse: typeof inverse;
    power: typeof power;
    transpose: typeof transpose;
};
export = matrice;
