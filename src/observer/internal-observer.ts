/**
 * Callback for observing object property.
 *
 * @callback observeChangeCallback
 * @param {any} value - New value of the property.
 */

/**
 * Observe property changes on internal object.
 *
 * @param {Object}                obj       Object to observe.
 * @param {string}                property  Key of property to observe.
 * @param {observeChangeCallback} onChanged Callback to fire when the property changes.
 *
 * @return {Proxy} Proxied object.
 */
const observeInternalProperty = ( obj: Object, property: string, onChanged: ( value: any ) => void ) => { // eslint-disable-line no-unused-vars
	const handler = {
		get() {
			return Reflect.get( obj, property );
		},
		set( target, prop, value ) {
			Reflect.set( obj, property, value );

			if ( prop === property ) {
				onChanged( value );
			}

			return true;
		},
	} as ProxyHandler<any>;

	return new Proxy( obj, handler );
};

export default observeInternalProperty;

