Default:

```js
import TextInput from "./TextInput.js";
import ThemeProvider from "../ThemeProvider";

const [textValue, setTextValue] = React.useState("");

<ThemeProvider>
  <TextInput
    value={textValue}
    onChange={(v) => setTextValue(v)}
    label="Field label"
  />
</ThemeProvider>;
```

With search icon:

```js
import TextInput from "./TextInput.js";
import ThemeProvider from "../ThemeProvider";

const [textValue, setTextValue] = React.useState("");

<ThemeProvider>
  <TextInput
    icon="search"
    type="input-icon"
    value={textValue}
    onChange={(v) => setTextValue(v)}
    label="Field label"
  />
</ThemeProvider>;
```

Required:

```js
import TextInput from "./TextInput.js";
import ThemeProvider from "../ThemeProvider";

const [textValue, setTextValue] = React.useState("");

<ThemeProvider>
  <TextInput
    value={textValue}
    onChange={(v) => setTextValue(v)}
    label="Field label"
    required
  />
</ThemeProvider>;
```

With help text:

```js
import TextInput from "./TextInput.js";
import ThemeProvider from "../ThemeProvider";

const [textValue, setTextValue] = React.useState("");

<ThemeProvider>
  <TextInput
    value={textValue}
    onChange={(v) => setTextValue(v)}
    label="Field label"
    tooltip="Help text"
  />
</ThemeProvider>;
```

Textarea:

```js
import TextInput from "./TextInput.js";
import ThemeProvider from "../ThemeProvider";

const [textValue, setTextValue] = React.useState("");

<ThemeProvider>
  <TextInput
    type="textarea"
    onChange={(v) => setTextValue(v)}
    label="Field label"
  />
</ThemeProvider>;
```

Read only:

```js
import TextInput from "./TextInput.js";
import ThemeProvider from "../ThemeProvider";

const [textValue, setTextValue] = React.useState("Some text");

<ThemeProvider>
  <TextInput
    onChange={(v) => setTextValue(v)}
    label="Field label"
    readonly
    value={textValue}
  />
</ThemeProvider>;
```
