Default:

```js
import TextInput from "./TextInput.js";

const [textValue, setTextValue] = React.useState("");

<TextInput
  value={textValue}
  onChange={(v) => setTextValue(v)}
  label="Field label"
/>;
```

With search icon:

```js
import TextInput from "./TextInput.js";

const [textValue, setTextValue] = React.useState("");

<TextInput
  icon="search"
  type="input-icon"
  value={textValue}
  onChange={(v) => setTextValue(v)}
  label="Field label"
/>;
```

Required:

```js
import TextInput from "./TextInput.js";

const [textValue, setTextValue] = React.useState("");

<TextInput
  value={textValue}
  onChange={(v) => setTextValue(v)}
  label="Field label"
  required
/>;
```

With help text:

```js
import TextInput from "./TextInput.js";

const [textValue, setTextValue] = React.useState("");

<TextInput
  value={textValue}
  onChange={(v) => setTextValue(v)}
  label="Field label"
  texthelper="Help text"
/>;
```

Textarea:

```js
import TextInput from "./TextInput.js";

const [textValue, setTextValue] = React.useState("");

<TextInput
  type="textarea"
  onChange={(v) => setTextValue(v)}
  label="Field label"
/>;
```
