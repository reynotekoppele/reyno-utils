"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.doRequest = exports.observeInternalProperty = exports.observeExternalProperty = exports.throttle = exports.sleep = exports.debounce = void 0;
/**
 * Internal dependencies.
 */
const delay_1 = require("./delay");
Object.defineProperty(exports, "debounce", { enumerable: true, get: function () { return delay_1.debounce; } });
Object.defineProperty(exports, "sleep", { enumerable: true, get: function () { return delay_1.sleep; } });
Object.defineProperty(exports, "throttle", { enumerable: true, get: function () { return delay_1.throttle; } });
const observer_1 = require("./observer");
Object.defineProperty(exports, "observeExternalProperty", { enumerable: true, get: function () { return observer_1.observeExternalProperty; } });
Object.defineProperty(exports, "observeInternalProperty", { enumerable: true, get: function () { return observer_1.observeInternalProperty; } });
const request_1 = require("./request");
Object.defineProperty(exports, "doRequest", { enumerable: true, get: function () { return request_1.doRequest; } });
