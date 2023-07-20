/**
 * External dependencies.
 */
import { describe, it } from 'node:test';
import assert from 'node:assert/strict';

/**
 * Internal dependencies.
 */
import { debounce, sleep } from '../../lib/esm/index.js';

describe( 'debounce', () => {
	it( 'should fire only once', async () => {
		let count = 0;
		const fn = debounce( () => count++, 100 );

		fn();
		fn();
		fn();

		await sleep( 200 );

		assert.equal( count, 1 );
	} );

	it( 'should fire only once with arguments', async () => {
		let count = 0;
		let arg = 0;

		const fn = debounce( ( value ) => {
			count++;
			arg = value;
		}, 100 );

		fn( 1 );
		fn( 2 );
		fn( 3 );

		await sleep( 200 );

		assert.equal( count, 1 );
		assert.equal( arg, 3 );
	} );
} );
