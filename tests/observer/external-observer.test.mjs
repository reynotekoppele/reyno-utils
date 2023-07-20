/**
 * External dependencies.
 */
import { describe, it } from 'node:test';
import assert from 'node:assert/strict';

/**
 * Internal dependencies.
 */
import { observeExternalProperty } from '../../lib/esm/index.js';

describe( 'observeExternalProperty', () => {
	it( 'should observe external property', ( t, done ) => {
		const obj = {};

		observeExternalProperty( obj, 'foo', ( value ) => {
			assert.strictEqual( value, 'bar' );
			done();
		} );

		obj.foo = 'bar';
	} );

	it( 'should observe external property with initial value', ( t, done ) => {
		const obj = { foo: 'bar' };

		observeExternalProperty( obj, 'foo', ( value ) => {
			assert.strictEqual( value, 'baz' );
			done();
		} );

		obj.foo = 'baz';
	} );
} );
