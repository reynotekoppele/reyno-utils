"use strict";
/**
 * Callback for observing object property.
 *
 * @callback observeChangeCallback
 * @param {any} value - New value of the property.
 */
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Observe property changes on external properties.
 *
 * WARNING: Only use this when you can't wrap the object in a Proxy (see {@link observeInternalProperty}).
 *
 * @param {Object}                obj       Object to observe.
 * @param {string}                property  Key of property to observe.
 * @param {observeChangeCallback} onChanged Callback to fire when the property changes.
 */
const observeExternalProperty = (obj, property, onChanged) => {
    // Get descriptor settings.
    const oldDescriptor = Object.getOwnPropertyDescriptor(obj, property);
    // Make a copy of the value.
    let val = obj[property];
    Object.defineProperty(obj, property, {
        get() {
            return val;
        },
        set(value) {
            val = value;
            onChanged(value);
        },
        enumerable: oldDescriptor === null || oldDescriptor === void 0 ? void 0 : oldDescriptor.enumerable,
        configurable: oldDescriptor === null || oldDescriptor === void 0 ? void 0 : oldDescriptor.configurable,
    });
};
exports.default = observeExternalProperty;
