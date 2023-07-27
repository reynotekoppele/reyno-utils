export const FOCUSABLE_SELECTORS: string[] = [
	'a[href]:not([disabled])',
	'button:not([disabled])',
	'textarea:not([disabled])',
	'input[type="text"]:not([disabled])',
	'input[type="search"]:not([disabled])',
	'input[type="radio"]:not([disabled])',
	'input[type="checkbox"]:not([disabled])',
	'select:not([disabled])',
	'[tabindex]:not([disabled]):not([tabindex="-1"])',
];

class TrapFocus {
	container: HTMLElement | null;
	referrer: HTMLElement;
	firstElement: HTMLElement | undefined;
	lastElement: HTMLElement | undefined;
	listener: ( event: KeyboardEvent ) => void; // eslint-disable-line no-unused-vars

	/**
	 * Trap focus within a container.
	 *
	 * @param {string|HTMLElement} element  Element or selector for element to trap focus within.
	 * @param {HTMLElement}        referrer Element to focus when focus leaves the container.
	 */
	constructor( element: HTMLElement, referrer: HTMLElement ) {
		this.container = typeof element === 'string' ? document.querySelector( element ) : element;
		this.referrer = referrer;

		// Need a reference to the bound function to remove the event listener.
		this.listener = this.onKeydown.bind( this );

		if ( ! this.container ) {
			return;
		}

		// Get all focusable elements in the container.
		const focusableElements = this.container.querySelectorAll( FOCUSABLE_SELECTORS.join( ',' ) );
		this.firstElement = focusableElements[ 0 ] as HTMLElement;
		this.lastElement = focusableElements[ focusableElements.length - 1 ] as HTMLElement;
	}

	/**
	 * Capture tab key press.
	 *
	 * @param {KeyboardEvent} event
	 */
	onKeydown( event: KeyboardEvent ) {
		const TAB_KEY = 9;

		// Check for tab key press.
		const isTabPressed = ( event.key === 'Tab' || event.keyCode === TAB_KEY );

		// Exit if tab key is not pressed.
		if ( ! isTabPressed ) {
			return;
		}

		if ( event.shiftKey ) {
			// If shift key is pressed, focus the last element when tabbing backwards.
			if ( document.activeElement === this.firstElement ) {
				this.lastElement?.focus();
				event.preventDefault();
			}
		} else {
			// If shift key is not pressed, focus the first element when tabbing forwards.
			if ( document.activeElement === this.lastElement ) { // eslint-disable-line no-lonely-if
				this.firstElement?.focus();
				event.preventDefault();
			}
		}
	}

	/**
	 * Start trapping focus.
	 */
	start() {
		this.container?.addEventListener( 'keydown', this.listener, false );

		// Focus the first element, need a delay since there is an animation.
		setTimeout( () => {
			this.firstElement?.focus();
		}, 250 );
	}

	/**
	 * Stop trapping focus.
	 */
	end() {
		this.container?.removeEventListener( 'keydown', this.listener, false );
		this.referrer.focus();
	}
}

export default TrapFocus;
