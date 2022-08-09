With Material icon:

```js
import IconButton from "./IconButton.js";

<IconButton icon="star" type="text" />;
```

With custom color:

```js
import IconButton from "./IconButton.js";
import { ICONS } from "../../constants.js";

<IconButton icon="star" type="text" color="#8C30F5" />;
```

With custom icon:

```js
import IconButton from "./IconButton.js";
import { ICONS } from "../../constants.js";

<IconButton icon={ICONS.GOOGLE_SHEETS} />;
```
