//ECMAScript replacement for __dir

import * as url from "url";

const __dirname = url.fileURLToPath(new URL(".", import.meta.url));

console.log(__dirname);
