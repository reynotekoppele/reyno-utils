"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.throttle = exports.sleep = exports.debounce = void 0;
/**
 * Internal dependencies.
 */
const debounce_1 = __importDefault(require("./debounce"));
exports.debounce = debounce_1.default;
const sleep_1 = __importDefault(require("./sleep"));
exports.sleep = sleep_1.default;
const throttle_1 = __importDefault(require("./throttle"));
exports.throttle = throttle_1.default;
