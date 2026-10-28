// LeetCode 2624: Snail Traversal
// https://leetcode.com/problems/snail-traversal/
// Even columns read top-to-bottom; odd columns read bottom-to-top.
// For odd columns, k = j * rowsCount + i, so the source index is
// j * rowsCount + rowsCount - 1 - i.
// Valid input: O(rowsCount * colsCount) time and output space.
// Invalid input: O(1) time and extra space.
interface Array<T> {
    snail(rowsCount: number, colsCount: number): number[][];
}

Array.prototype.snail = function(rowsCount: number, colsCount: number): number[][] {
    if (rowsCount * colsCount !== this.length) return [];

    const result: number[][] = new Array(rowsCount);

    for (let i = 0; i < rowsCount; i++) {
        result[i] = new Array(colsCount);

        for (let j = 0; j < colsCount; j++) {
            result[i][j] = 0;
        }
    }

    let k = 0;
    for (let j = 0; j < colsCount; j++) {
        for (let i = 0; i < rowsCount; i++) {
            if (j % 2 === 0) {
                result[i][j] = this[k];
            } else {
                result[i][j] = this[k + (rowsCount - (2 * i)) - 1];
            }
            k++;
        }
    }

    return result;
};

/**
 * const arr = [1, 2, 3, 4];
 * arr.snail(1, 4); // [[1, 2, 3, 4]]
 */
