/**
 * External dependencies.
 */
import { describe, it } from 'node:test';
import assert from 'node:assert/strict';

/**
 * Internal dependencies.
 */
import { doRequest } from '../../lib/esm/index.js';

describe( 'doRequest', () => {
	it( 'should do request', async () => {
		const data = await doRequest( 'https://jsonplaceholder.typicode.com/todos/1' );

		assert.strictEqual( data.id, 1 );
	} );

	it( 'should throw error', async () => {
		try {
			await doRequest( 'https://jsonplaceholder.typicode.com/todos/1', { method: 'POST' } );
		} catch ( error ) {
			assert.strictEqual( error.message, 'Response is not ok!' );
		}
	} );

	it( 'should abort request', async () => {
		const controller = new AbortController();

		setTimeout( () => {
			controller.abort();
		}, 100 );

		try {
			await doRequest( 'https://jsonplaceholder.typicode.com/todos/1', {}, controller );
		} catch ( error ) {
			assert.strictEqual( error.name, 'AbortError' );
		}
	} );
} );
