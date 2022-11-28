Default:

```js
import AppsMenu from "./AppsMenu.js";
import ThemeProvider from "../ThemeProvider";
import { apps } from "../../mockup.js";

const [autocompleteValue, setAutocompleteValue] = React.useState("");

<ThemeProvider>
  <AppsMenu apps={apps} />
</ThemeProvider>;
```

On dark background:

```js
import AppsMenu from "./AppsMenu.js";
import ThemeProvider from "../ThemeProvider";
import { apps } from "../../mockup.js";

const [autocompleteValue, setAutocompleteValue] = React.useState("");

<ThemeProvider>
  <div style={{ background: "#000000", padding: "24px" }}>
    <AppsMenu apps={apps} dark />
  </div>
</ThemeProvider>;
```
