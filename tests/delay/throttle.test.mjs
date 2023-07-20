/**
 * External dependencies.
 */
import { describe, it } from 'node:test';
import assert from 'node:assert/strict';

/**
 * Internal dependencies.
 */
import { throttle, sleep } from '../../lib/esm/index.js';

describe( 'throttle', () => {
	it( 'should fire twice', async () => {
		let count = 0;
		const fn = throttle( () => count++, 300 );

		fn();
		fn();
		fn();

		await sleep( 200 );

		assert.equal( count, 1 );

		await sleep( 200 );

		assert.equal( count, 2 );
	} );

	it( 'should fire twice with arguments', async () => {
		let count = 0;
		let arg = 0;

		const fn = throttle( ( value ) => {
			count++;
			arg = value;
		}, 300 );

		fn( 1 );
		fn( 2 );
		fn( 3 );

		await sleep( 200 );

		assert.equal( count, 1 );
		assert.equal( arg, 1 );

		await sleep( 200 );

		assert.equal( count, 2 );
		assert.equal( arg, 3 );
	} );
} );
