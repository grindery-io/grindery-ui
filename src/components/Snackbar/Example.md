Default:

```js
import Snackbar from "./Snackbar.js";
import ThemeProvider from "../ThemeProvider";
import Button from "../Button";

const [opened, setOpened] = React.useState(false);

const handleClick = () => {
  setOpened(true);
};

const handleClose = (event, reason) => {
  if (reason === "clickaway") {
    return;
  }

  setOpened(false);
};

<ThemeProvider>
  <Button
    onClick={handleClick}
    value="Default snackbar"
    size="small"
    variant="outlined"
  />
  <Snackbar
    open={opened}
    handleClose={handleClose}
    message="This is a default snackbar"
  />
</ThemeProvider>;
```

Success:

```js
import Snackbar from "./Snackbar.js";
import ThemeProvider from "../ThemeProvider";
import Button from "../Button";

const [opened, setOpened] = React.useState(false);

const handleClick = () => {
  setOpened(true);
};

const handleClose = (event, reason) => {
  if (reason === "clickaway") {
    return;
  }

  setOpened(false);
};

<ThemeProvider>
  <Button
    onClick={handleClick}
    value="Success snackbar"
    size="small"
    variant="outlined"
  />
  <Snackbar
    open={opened}
    handleClose={handleClose}
    message="Workspace Inboundlabs created successfuly."
    severity="success"
    hideCloseButton
  />
</ThemeProvider>;
```

Error:

```js
import Snackbar from "./Snackbar.js";
import ThemeProvider from "../ThemeProvider";
import Button from "../Button";

const [opened, setOpened] = React.useState(false);

const handleClick = () => {
  setOpened(true);
};

const handleClose = (event, reason) => {
  if (reason === "clickaway") {
    return;
  }

  setOpened(false);
};

<ThemeProvider>
  <Button
    onClick={handleClick}
    value="Error snackbar"
    size="small"
    variant="outlined"
  />
  <Snackbar
    open={opened}
    handleClose={handleClose}
    message="This is an error snackbar"
    severity="error"
  />
</ThemeProvider>;
```

Permanent, until closed manually:

```js
import Snackbar from "./Snackbar.js";
import ThemeProvider from "../ThemeProvider";
import Button from "../Button";

const [opened, setOpened] = React.useState(false);

const handleClick = () => {
  setOpened(true);
};

const handleClose = (event, reason) => {
  if (reason === "clickaway") {
    return;
  }

  setOpened(false);
};

<ThemeProvider>
  <Button
    onClick={handleClick}
    value="Permanent snackbar"
    size="small"
    variant="outlined"
  />
  <Snackbar
    open={opened}
    handleClose={handleClose}
    message="This is a permanent snackbar"
    severity="success"
    autoHideDuration={null}
  />
</ThemeProvider>;
```
