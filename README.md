# Utils

Utils is a collection of simple utilty functions that can be used to simplify and improve your code.

The package is available in CommonJS and ESM format.

## Installation and Usage

Prerequisites: [Node.js](https://nodejs.org/en/) (>=18.0.0) and [npm](https://www.npmjs.com/) (>=9.5.1)

You can install the package using the command:

```bash
npm install @reyno/utils
```

Then, you can import the functions you want to use:

```typescript
import { sleep } from '@reyno/utils';
```

Or, for CommonJS:

```javascript
const { sleep } = require( '@reyno/utils' );
```

##  Functions

- [debounce](https://github.com/reynotekoppele/reyno-utils/blob/main/src/delay/debounce.ts)
- [sleep](https://github.com/reynotekoppele/reyno-utils/blob/main/src/delay/sleep.ts)
- [throttle](https://github.com/reynotekoppele/reyno-utils/blob/main/src/delay/throttle.ts)
- [observeExternalProperty](https://github.com/reynotekoppele/reyno-utils/blob/main/src/observer/external-observer.ts)
- [observeInternalProperty](https://github.com/reynotekoppele/reyno-utils/blob/main/src/observer/internal-observer.ts)
-[doRequest](https://github.com/reynotekoppele/reyno-utils/blob/main/src/request/doRequest.ts)
