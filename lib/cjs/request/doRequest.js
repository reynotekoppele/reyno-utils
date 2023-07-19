"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Make AJAX request.
 *
 * @param {string}          url          URL to request.
 * @param {RequestInit}     [options]    Fetch options.
 * @param {AbortController} [controller] Controller for current request.
 *
 * @throws Will throw an error if the status code is not 2xx.
 *
 * @return {Promise<any>} Resolved data.
 */
const doRequest = (url, options = {}, controller = null) => __awaiter(void 0, void 0, void 0, function* () {
    const mergedOptions = Object.assign({ method: 'POST', 
        // @ts-ignore
        signal: controller === null || controller === void 0 ? void 0 : controller.signal }, options);
    const response = yield fetch(url, mergedOptions);
    // Make sure we have a 2xx status code.
    if (!response.ok) {
        throw new Error('Response is not ok!');
    }
    // Get JSON response.
    const data = yield response.json();
    // Return data.
    return data;
});
exports.default = doRequest;
