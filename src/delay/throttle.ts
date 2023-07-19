/**
 * Execute function once every given timeframe, defaults to 500ms.
 * Can be used as a rate limiter.
 *
 * @param {Function} cb Callback function to execute.
 * @param {number}   ms Number of milliseconds to wait.
 */
const throttle = ( cb: (...args: any[]) => void, ms = 500 ) => {
	let timerId: number;
	let lastRun: number;

	const runCallback = ( ...args: any[] ): void => {
		cb( ...args );
		lastRun = Date.now();
	};

	return ( ...args: any[] ) => {
		if ( ! lastRun ) {
			runCallback( ...args );
			return;
		}

		clearTimeout( timerId );
		timerId = setTimeout( () => {
			if ( ( Date.now() - lastRun ) >= ms ) {
				runCallback( ...args );
			}
		}, ms - ( Date.now() - lastRun ) );
	};
};

export default throttle;
