class Stack {
	items: any[] = [];

	push( item: any ) {
		this.items.push( item );
	}

	pop() {
		return this.items.pop();
	}

	peek() {
		return this.items[ this.items.length - 1 ];
	}

	isEmpty() {
		return this.items.length === 0;
	}

	size() {
		return this.items.length;
	}
}

export default Stack;
