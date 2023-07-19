/**
 * Callback for observing object property.
 *
 * @callback observeChangeCallback
 * @param {any} value - New value of the property.
 */

/**
 * Observe property changes on external properties.
 *
 * WARNING: Only use this when you can't wrap the object in a Proxy (see {@link observeInternalProperty}).
 *
 * @param {Object}                obj       Object to observe.
 * @param {string}                property  Key of property to observe.
 * @param {observeChangeCallback} onChanged Callback to fire when the property changes.
 */
const observeExternalProperty = ( obj: Object, property: string, onChanged: ( value: any ) => void ) => { // eslint-disable-line no-unused-vars
	// Get descriptor settings.
	const oldDescriptor = Object.getOwnPropertyDescriptor( obj, property );

	// Make a copy of the value.
	let val: any = ( obj as any )[ property ];

	Object.defineProperty( obj, property, {
		get() {
			return val;
		},
		set( value: any ) {
			val = value;
			onChanged( value );
		},
		enumerable: oldDescriptor?.enumerable,
		configurable: oldDescriptor?.configurable,
	} );
};

export default observeExternalProperty;
