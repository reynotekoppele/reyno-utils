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
const doRequest = async <T>( url: string, options = {}, controller = null ): Promise<T> => {
	const mergedOptions = {
		method: 'GET',
		// @ts-ignore
		signal: controller?.signal,
		...options,
	} as RequestInit;

	const response = await fetch( url, mergedOptions );

	// Make sure we have a 2xx status code.
	if ( ! response.ok ) {
		throw new Error( 'Response is not ok!' );
	}

	// Get JSON response.
	const data = await response.json();

	// Return data.
	return data;
};

export default doRequest;
