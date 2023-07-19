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
declare const observeInternalProperty: (obj: Object, property: string, onChanged: (value: any) => void) => any;
export default observeInternalProperty;
//# sourceMappingURL=internal-observer.d.ts.map