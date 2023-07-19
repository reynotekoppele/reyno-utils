/**
 * Execute function once every given timeframe, defaults to 500ms.
 * Can be used as a rate limiter.
 *
 * @param {Function} cb Callback function to execute.
 * @param {number}   ms Number of milliseconds to wait.
 */
declare const throttle: (cb: (...args: any[]) => void, ms?: number) => (...args: any[]) => void;
export default throttle;
//# sourceMappingURL=throttle.d.ts.map