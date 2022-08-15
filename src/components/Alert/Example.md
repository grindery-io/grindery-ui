Default:

```js
import Alert from "./Alert.js";
import ThemeProvider from "../ThemeProvider";

<ThemeProvider>
  <Alert>Success message</Alert>
</ThemeProvider>;
```

Error:

```js
import Alert from "./Alert.js";
import ThemeProvider from "../ThemeProvider";

<ThemeProvider>
  <Alert color="error">Error message</Alert>
</ThemeProvider>;
```

Warning:

```js
import Alert from "./Alert.js";
import ThemeProvider from "../ThemeProvider";

<ThemeProvider>
  <Alert color="warning">Warning message</Alert>
</ThemeProvider>;
```

Info:

```js
import Alert from "./Alert.js";
import ThemeProvider from "../ThemeProvider";

<ThemeProvider>
  <Alert color="info">Information message</Alert>
</ThemeProvider>;
```

With custom icon:

```js
import Alert from "./Alert.js";
import ThemeProvider from "../ThemeProvider";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

<ThemeProvider>
  <Alert color="error" icon={<CheckCircleOutlineIcon fontSize="inherit" />}>
    Error message
  </Alert>
</ThemeProvider>;
```
