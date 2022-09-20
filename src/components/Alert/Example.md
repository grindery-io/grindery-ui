Default:

```js
import Alert from "./Alert.js";
import ThemeProvider from "../ThemeProvider";

<ThemeProvider>
  <Alert elevation={0}>Success message</Alert>
</ThemeProvider>;
```

Error:

```js
import Alert from "./Alert.js";
import ThemeProvider from "../ThemeProvider";

<ThemeProvider>
  <Alert elevation={0} color="error">
    Error message
  </Alert>
</ThemeProvider>;
```

Warning:

```js
import Alert from "./Alert.js";
import ThemeProvider from "../ThemeProvider";

<ThemeProvider>
  <Alert elevation={0} color="warning">
    Warning message
  </Alert>
</ThemeProvider>;
```

Info:

```js
import Alert from "./Alert.js";
import ThemeProvider from "../ThemeProvider";

<ThemeProvider>
  <Alert elevation={0} color="info">
    Information message
  </Alert>
</ThemeProvider>;
```

With custom icon:

```js
import Alert from "./Alert.js";
import ThemeProvider from "../ThemeProvider";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

<ThemeProvider>
  <Alert
    elevation={0}
    color="error"
    icon={<CheckCircleOutlineIcon fontSize="inherit" />}
  >
    Error message
  </Alert>
</ThemeProvider>;
```
