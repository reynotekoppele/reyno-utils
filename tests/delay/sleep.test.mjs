/**
 * External dependencies.
 */
import { describe, it } from 'node:test';
import assert from 'node:assert/strict';

/**
 * Internal dependencies.
 */
import { sleep } from '../../lib/esm/index.js';

describe( 'sleep', () => {
	it( 'should sleep for 1 second', async () => {
		const SEC_IN_MS = 1000;

		const start = performance.now();
		await sleep( SEC_IN_MS );
		const end = performance.now();

		assert.ok( end - start >= SEC_IN_MS );
	} );
} );
