/**
 * Execute function after given delay, defaults to 500ms.
 * Reset delay when called within the given timeframe.
 *
 * @param {Function} cb Callback function to execute.
 * @param {number}   ms Number of milliseconds to wait.
 */
declare const debounce: (cb: (...args: any[]) => void, ms?: number) => <T>(...args: T[]) => void;
export default debounce;
//# sourceMappingURL=debounce.d.ts.map