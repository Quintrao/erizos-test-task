import { printMatrixInSpiral } from './fn';
import { describe, it, expect } from 'vitest';

describe('printMatrixInSpiral', () => {
    it('should return an empty array for an empty matrix', () => {
        const matrix: number[][] = [];
        expect(printMatrixInSpiral(matrix)).toEqual([]);
    });

    it('should return the correct spiral order for a 3x3 matrix', () => {
        const matrix: number[][] = [
            [1, 2, 3],
            [4, 5, 6],
            [7, 8, 9],
        ];
        expect(printMatrixInSpiral(matrix)).toEqual([1, 2, 3, 6, 9, 8, 7, 4, 5]);
    });

    it('should return the correct spiral order for a 4x4 matrix', () => {
        const matrix: number[][] = [
            [1, 2, 3, 4],
            [5, 6, 7, 8],
            [9, 10, 11, 12],
            [13, 14, 15, 16],
        ];
        expect(printMatrixInSpiral(matrix)).toEqual([1, 2, 3, 4, 8, 12, 16, 15, 14, 13, 9, 5, 6, 7, 11, 10]);
    });

    it('should return the correct spiral order for a 5x3 matrix', () => {
        const matrix: number[][] = [
            [1, 2, 3],
            [4, 5, 6],
            [7, 8, 9],
            [10, 11, 12],
            [13, 14, 15],
        ];
        expect(printMatrixInSpiral(matrix)).toEqual([1, 2, 3, 6, 9, 12, 15, 14, 13, 10, 7, 4, 5, 8, 11]);
    });
});
