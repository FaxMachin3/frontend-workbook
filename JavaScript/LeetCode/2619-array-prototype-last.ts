// LeetCode 2619: Array Prototype Last
// https://leetcode.com/problems/array-prototype-last/
// Time: O(1). Extra space: O(1).

interface Array<T> {
    last(): T | -1;
}

Array.prototype.last = function() {
    const len = this.length;
    if (len <= 0) return -1;
    return this[len - 1];
};

/**
 * const arr = [1, 2, 3];
 * arr.last(); // 3
 */
