// LeetCode 2620: Counter
// https://leetcode.com/problems/counter/
// The closure retains n; post-increment returns it before increasing it.
// Time: O(1) per call. Extra space: O(1) per counter.
function createCounter(n: number): () => number {
    return function() {
        return n++;
    };
}

/**
 * const counter = createCounter(10);
 * counter(); // 10
 * counter(); // 11
 * counter(); // 12
 */
