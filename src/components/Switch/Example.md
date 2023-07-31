Default:

```js
import Switch from "./Switch.js";
import ThemeProvider from "../ThemeProvider";

const [value, setValue] = React.useState(false);

<ThemeProvider>
  <Switch
    value={value}
    onChange={(e) => {
      setValue(e.target.checked);
    }}
  />
</ThemeProvider>;
```

With state text:

```js
import Switch from "./Switch.js";
import ThemeProvider from "../ThemeProvider";

const [value, setValue] = React.useState(false);

<ThemeProvider>
  <Switch
    value={value}
    on="On"
    off="Off"
    onChange={(e) => {
      setValue(e.target.checked);
    }}
  />
</ThemeProvider>;
```

With custom color:

```js
import Switch from "./Switch.js";
import ThemeProvider from "../ThemeProvider";

const [value, setValue] = React.useState(false);

<ThemeProvider>
  <Switch
    value={value}
    color="#0057FF"
    onChange={(e) => {
      setValue(e.target.checked);
    }}
  />
</ThemeProvider>;
```
