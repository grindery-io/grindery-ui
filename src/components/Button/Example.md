Default:

```js
import Button from "./Button.js";
import ThemeProvider from "../ThemeProvider";

<ThemeProvider>
  <Button value="Click me" />
</ThemeProvider>;
```

Primary:

```js
import Button from "./Button.js";
import ThemeProvider from "../ThemeProvider";

<ThemeProvider>
  <Button value="Click me" color="primary" />
</ThemeProvider>;
```

Outlined:

```js
import Button from "./Button.js";
import ThemeProvider from "../ThemeProvider";

<ThemeProvider>
  <Button value="Click me" variant="outlined" color="primary" />
</ThemeProvider>;
```

Small:

```js
import Button from "./Button.js";
import ThemeProvider from "../ThemeProvider";

<ThemeProvider>
  <Button value="Click me" size="small" />
</ThemeProvider>;
```

With icon:

```js
import Button from "./Button.js";
import ThemeProvider from "../ThemeProvider";
import { ICONS } from "../../constants.js";

<ThemeProvider>
  <Button value="Click me" icon={ICONS.GOOGLE_SHEETS} />
</ThemeProvider>;
```

With loading animation:

```js
import Button from "./Button.js";
import ThemeProvider from "../ThemeProvider";

<ThemeProvider>
  <Button value="Click me" loading={true} />
</ThemeProvider>;
```

Disabled:

```js
import Button from "./Button.js";
import ThemeProvider from "../ThemeProvider";

<ThemeProvider>
  <Button value="Click me" disabled />
</ThemeProvider>;
```
