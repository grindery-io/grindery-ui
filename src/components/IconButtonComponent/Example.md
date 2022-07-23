With Material icon:

```js
import IconButtonComponent from "./IconButtonComponent.js";

<IconButtonComponent icon="star" type="text" />;
```

With custom color:

```js
import IconButtonComponent from "./IconButtonComponent.js";
import { ICONS } from "../../constants.js";

<IconButtonComponent icon="star" type="text" color="#8C30F5" />;
```

With custom icon:

```js
import IconButtonComponent from "./IconButtonComponent.js";
import { ICONS } from "../../constants.js";

<IconButtonComponent icon={ICONS.GOOGLE_SHEETS} />;
```
