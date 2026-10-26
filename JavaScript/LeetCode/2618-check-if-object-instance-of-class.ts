// LeetCode 2618: Check if Object Instance of Class
// https://leetcode.com/problems/check-if-object-instance-of-class/
// Walk the prototype chain, including boxed primitive prototypes.
// Time: O(h), where h is the prototype-chain height. Extra space: O(1).
function checkIfInstanceOf(obj: any, classFunction: any): boolean {
    if (typeof classFunction !== "function") return false;

    while (obj !== null && obj !== undefined) {
        if (obj === classFunction.prototype) return true;
        obj = Object.getPrototypeOf(obj);
    }

    return false;
}
