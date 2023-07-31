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
  <IconButton icon="star" type="text" color="#0057FF" />
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
