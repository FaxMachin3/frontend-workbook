// LeetCode 2621: Sleep
// https://leetcode.com/problems/sleep/
// Schedules a timer without blocking the thread.
// Actual resolution can be later than millis because of event-loop scheduling.
// Setup time: O(1). Extra space: O(1) per call.
async function sleep(millis: number): Promise<void> {
    return new Promise<void>((res, _rej) => {
        setTimeout(res, millis);
    });
}

/**
 * const t = Date.now();
 * sleep(100).then(() => console.log(Date.now() - t)); // Approximately 100ms.
 */
