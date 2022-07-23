Default:

```js
import AlertField from "./AlertField.js";

<AlertField>Success message</AlertField>;
```

Error:

```js
import AlertField from "./AlertField.js";

<AlertField color="error">Error message</AlertField>;
```

Warning:

```js
import AlertField from "./AlertField.js";

<AlertField color="warning">Warning message</AlertField>;
```

Info:

```js
import AlertField from "./AlertField.js";

<AlertField color="info">Information message</AlertField>;
```

With custom icon:

```js
import AlertField from "./AlertField.js";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

<AlertField color="error" icon={<CheckCircleOutlineIcon fontSize="inherit" />}>
  Error message
</AlertField>;
```
