/**
 * Wait for a given amount of time.
 *
 * @param {number} ms Number of milliseconds to wait.
 *
 * @return {Promise<void>}
 */
const sleep = ( ms: number ): Promise<void> => {
	return new Promise( ( res ) => setTimeout( res, ms ) );
};

export default sleep;
