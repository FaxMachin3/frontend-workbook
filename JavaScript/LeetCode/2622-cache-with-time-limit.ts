// LeetCode 2622: Cache With Time Limit
// https://leetcode.com/problems/cache-with-time-limit/
// Each key has a timer; overwriting a key cancels its previous timer.
// Expected O(1) Map work per method; O(n) space for active entries/timers.
// Expiration callbacks run when the event loop processes their timers.
class TimeLimitedCache {
    private cache: Map<number, {
        value: number;
        timeout: ReturnType<typeof setTimeout>;
    }>;

    constructor() {
        this.cache = new Map();
    }

    set(key: number, value: number, duration: number): boolean {
        const existing = this.cache.get(key);
        if (existing) {
            clearTimeout(existing.timeout);
        }

        const timeout = setTimeout(() => this.cache.delete(key), duration);
        this.cache.set(key, { value, timeout });

        return existing !== undefined;
    }

    get(key: number): number {
        return this.cache.get(key)?.value ?? -1;
    }

    count(): number {
        return this.cache.size;
    }
}

/**
 * const cache = new TimeLimitedCache();
 * cache.set(1, 42, 1000); // false
 * cache.get(1); // 42
 * cache.count(); // 1
 */
