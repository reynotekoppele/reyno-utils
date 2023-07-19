"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.observeInternalProperty = exports.observeExternalProperty = void 0;
/**
 * Internal dependencies.
 */
const external_observer_1 = __importDefault(require("./external-observer"));
exports.observeExternalProperty = external_observer_1.default;
const internal_observer_1 = __importDefault(require("./internal-observer"));
exports.observeInternalProperty = internal_observer_1.default;
