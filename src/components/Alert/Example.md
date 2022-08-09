Default:

```js
import Alert from "./Alert.js";

<Alert>Success message</Alert>;
```

Error:

```js
import Alert from "./Alert.js";

<Alert color="error">Error message</Alert>;
```

Warning:

```js
import Alert from "./Alert.js";

<Alert color="warning">Warning message</Alert>;
```

Info:

```js
import Alert from "./Alert.js";

<Alert color="info">Information message</Alert>;
```

With custom icon:

```js
import Alert from "./Alert.js";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

<Alert color="error" icon={<CheckCircleOutlineIcon fontSize="inherit" />}>
  Error message
</Alert>;
```
