"use strict";
/**
 * Callback for observing object property.
 *
 * @callback observeChangeCallback
 * @param {any} value - New value of the property.
 */
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Observe property changes on internal object.
 *
 * @param {Object}                obj       Object to observe.
 * @param {string}                property  Key of property to observe.
 * @param {observeChangeCallback} onChanged Callback to fire when the property changes.
 *
 * @return {Proxy} Proxied object.
 */
const observeInternalProperty = (obj, property, onChanged) => {
    const handler = {
        get() {
            return Reflect.get(obj, property);
        },
        set(target, prop, value) {
            Reflect.set(obj, property, value);
            if (prop === property) {
                onChanged(value);
            }
            return true;
        },
    };
    return new Proxy(obj, handler);
};
exports.default = observeInternalProperty;
