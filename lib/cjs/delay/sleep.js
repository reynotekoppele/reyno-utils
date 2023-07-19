"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Wait for a given amount of time.
 *
 * @param {number} ms Number of milliseconds to wait.
 *
 * @return {Promise<void>}
 */
const sleep = (ms) => {
    return new Promise((res) => setTimeout(res, ms));
};
exports.default = sleep;
