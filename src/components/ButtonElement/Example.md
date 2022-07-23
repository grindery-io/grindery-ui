Default:

```js
import ButtonElement from "./ButtonElement.js";

<ButtonElement value="Click me" />;
```

Primary:

```js
import ButtonElement from "./ButtonElement.js";

<ButtonElement value="Click me" color="primary" />;
```

Outlined:

```js
import ButtonElement from "./ButtonElement.js";

<ButtonElement value="Click me" variant="outlined" color="primary" />;
```

Small:

```js
import ButtonElement from "./ButtonElement.js";

<ButtonElement value="Click me" size="small" />;
```

With icon:

```js
import ButtonElement from "./ButtonElement.js";
import { ICONS } from "../../constants.js";

<ButtonElement value="Click me" icon={ICONS.GOOGLE_SHEETS} />;
```

With loading animation:

```js
import ButtonElement from "./ButtonElement.js";

<ButtonElement value="Click me" loading={true} />;
```

Disabled:

```js
import ButtonElement from "./ButtonElement.js";

<ButtonElement value="Click me" disabled />;
```
