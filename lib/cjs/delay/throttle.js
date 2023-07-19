"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Execute function once every given timeframe, defaults to 500ms.
 * Can be used as a rate limiter.
 *
 * @param {Function} cb Callback function to execute.
 * @param {number}   ms Number of milliseconds to wait.
 */
const throttle = (cb, ms = 500) => {
    let timerId;
    let lastRun;
    const runCallback = (...args) => {
        cb(...args);
        lastRun = Date.now();
    };
    return (...args) => {
        if (!lastRun) {
            runCallback(...args);
            return;
        }
        clearTimeout(timerId);
        timerId = setTimeout(() => {
            if ((Date.now() - lastRun) >= ms) {
                runCallback(...args);
            }
        }, ms - (Date.now() - lastRun));
    };
};
exports.default = throttle;
