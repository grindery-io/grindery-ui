With Material icon:

```js
import IconButton from "./IconButton.js";
import ThemeProvider from "../ThemeProvider";

<ThemeProvider>
  <IconButton icon="star" type="text" />
</ThemeProvider>;
```

With custom color:

```js
import IconButton from "./IconButton.js";
import ThemeProvider from "../ThemeProvider";
import { ICONS } from "../../constants.js";

<ThemeProvider>
  <IconButton icon="star" type="text" color="#8C30F5" />
</ThemeProvider>;
```

With custom icon:

```js
import IconButton from "./IconButton.js";
import ThemeProvider from "../ThemeProvider";
import { ICONS } from "../../constants.js";

<ThemeProvider>
  <IconButton icon={ICONS.GOOGLE_SHEETS} />
</ThemeProvider>;
```
