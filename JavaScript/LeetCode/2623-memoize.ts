// LeetCode 2623: Memoize
// https://leetcode.com/problems/memoize/
// JSON keys preserve argument order for this problem's integer arguments.
// Cache-hit time: O(k); cache-miss time: O(k + function execution time),
// assuming bounded-size numbers and k arguments.
type Fn = (...params: number[]) => number;

function memoize(fn: Fn): Fn {
    const memo = new Map();
    return function(...args) {
        const argsStr = JSON.stringify(args);
        const data = memo.get(argsStr);
        if (data !== undefined) return data;
        const ret = fn.apply(this, args);
        memo.set(argsStr, ret);
        return ret;
    };
}

/**
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *     callCount += 1;
 *     return a + b;
 * });
 * memoizedFn(2, 3); // 5
 * memoizedFn(2, 3); // 5
 * console.log(callCount); // 1
 */
