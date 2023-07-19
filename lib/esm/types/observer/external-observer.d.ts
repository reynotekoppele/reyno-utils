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
declare const observeExternalProperty: (obj: Object, property: string, onChanged: (value: any) => void) => void;
export default observeExternalProperty;
//# sourceMappingURL=external-observer.d.ts.map