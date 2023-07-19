/**
 * Execute function after given delay, defaults to 500ms.
 * Reset delay when called within the given timeframe.
 *
 * @param {Function} cb Callback function to execute.
 * @param {number}   ms Number of milliseconds to wait.
 */
const debounce = ( cb: (...args: any[]) => void, ms = 500 ) => {
	let timerId: number;

	return <T>( ...args: T[] ) => {
		clearTimeout( timerId );

		timerId = setTimeout( () => {
			cb( ...args );
		}, ms );
	};
};

export default debounce;
