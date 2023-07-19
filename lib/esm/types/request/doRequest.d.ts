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
declare const doRequest: <T>(url: string, options?: {}, controller?: null) => Promise<T>;
export default doRequest;
//# sourceMappingURL=doRequest.d.ts.map