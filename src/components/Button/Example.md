Default:

```js
import Button from "./Button.js";

<Button value="Click me" />;
```

Primary:

```js
import Button from "./Button.js";

<Button value="Click me" color="primary" />;
```

Outlined:

```js
import Button from "./Button.js";

<Button value="Click me" variant="outlined" color="primary" />;
```

Small:

```js
import Button from "./Button.js";

<Button value="Click me" size="small" />;
```

With icon:

```js
import Button from "./Button.js";
import { ICONS } from "../../constants.js";

<Button value="Click me" icon={ICONS.GOOGLE_SHEETS} />;
```

With loading animation:

```js
import Button from "./Button.js";

<Button value="Click me" loading={true} />;
```

Disabled:

```js
import Button from "./Button.js";

<Button value="Click me" disabled />;
```
