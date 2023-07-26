/**
 * External dependencies.
 */
import { describe, it } from 'node:test';
import assert from 'node:assert/strict';

/**
 * Internal dependencies.
 */
import { observeInternalProperty } from '../../dist/index.mjs';

describe( 'observeInternalProperty', () => {
	it( 'should observe internal property', ( t, done ) => {
		const obj = {};

		const proxy = observeInternalProperty( obj, 'foo', ( value ) => {
			assert.strictEqual( value, 'bar' );
			done();
		} );

		proxy.foo = 'bar';
	} );

	it( 'should observe internal property with initial value', ( t, done ) => {
		const obj = { foo: 'bar' };

		const proxy = observeInternalProperty( obj, 'foo', ( value ) => {
			assert.strictEqual( value, 'baz' );
			done();
		} );

		proxy.foo = 'baz';
	} );
} );
