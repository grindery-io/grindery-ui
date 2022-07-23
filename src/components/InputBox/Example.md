Default:

```js
import InputBox from "./InputBox.js";

const [textValue, setTextValue] = React.useState("");

<InputBox
  value={textValue}
  onChange={(v) => setTextValue(v)}
  label="Field label"
/>;
```

With search icon:

```js
import InputBox from "./InputBox.js";

const [textValue, setTextValue] = React.useState("");

<InputBox
  icon="search"
  type="input-icon"
  value={textValue}
  onChange={(v) => setTextValue(v)}
  label="Field label"
/>;
```

Required:

```js
import InputBox from "./InputBox.js";

const [textValue, setTextValue] = React.useState("");

<InputBox
  value={textValue}
  onChange={(v) => setTextValue(v)}
  label="Field label"
  required
/>;
```

With help text:

```js
import InputBox from "./InputBox.js";

const [textValue, setTextValue] = React.useState("");

<InputBox
  value={textValue}
  onChange={(v) => setTextValue(v)}
  label="Field label"
  texthelper="Help text"
/>;
```

Textarea:

```js
import InputBox from "./InputBox.js";

const [textValue, setTextValue] = React.useState("");

<InputBox
  type="textarea"
  onChange={(v) => setTextValue(v)}
  label="Field label"
/>;
```
