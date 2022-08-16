Default:

```js
import RichInput from "./RichInput";
import ThemeProvider from "../ThemeProvider";
import { ICONS } from "../../constants.js";
import { richInputOptions } from "../../mockup.js";

const [richInputValue, setRichInputValue] = React.useState("");

<ThemeProvider>
  <RichInput
    label="Field Label"
    value={richInputValue}
    options={richInputOptions}
    onChange={(val) => {
      setRichInputValue(val);
    }}
  />
</ThemeProvider>;
```

Required:

```js
import RichInput from "./RichInput";
import ThemeProvider from "../ThemeProvider";
import { ICONS } from "../../constants.js";
import { richInputOptions } from "../../mockup.js";

const [richInputValue, setRichInputValue] = React.useState("");

<ThemeProvider>
  <RichInput
    required
    label="Field Label"
    value={richInputValue}
    options={richInputOptions}
    placeholder="Enter some value here"
    onChange={(val) => {
      setRichInputValue(val);
    }}
  />
</ThemeProvider>;
```

With tooltip:

```js
import RichInput from "./RichInput";
import ThemeProvider from "../ThemeProvider";
import { ICONS } from "../../constants.js";
import { richInputOptions } from "../../mockup.js";

const [richInputValue, setRichInputValue] = React.useState("");

const cachedAddressBook = localStorage.getItem("gr_addressBook__123");
const [addressBook, setAddressBook] = React.useState(
  cachedAddressBook ? JSON.parse(cachedAddressBook) : []
);

<ThemeProvider>
  <RichInput
    required
    label="Field Label"
    value={richInputValue}
    options={richInputOptions}
    placeholder="Enter some value here"
    tooltip="Some tooltip with long text. Bla bla bla."
    onChange={(val) => {
      setRichInputValue(val);
    }}
  />
</ThemeProvider>;
```

With Address Book:

```js
import RichInput from "./RichInput";
import ThemeProvider from "../ThemeProvider";
import { ICONS } from "../../constants.js";
import { richInputOptions } from "../../mockup.js";

const [richInputValue, setRichInputValue] = React.useState("");

const cachedAddressBook = localStorage.getItem("gr_addressBook__123");
const [addressBook, setAddressBook] = React.useState(
  cachedAddressBook ? JSON.parse(cachedAddressBook) : []
);

<ThemeProvider>
  <RichInput
    required
    label="Field Label"
    value={richInputValue}
    options={richInputOptions}
    placeholder="Enter some value here"
    tooltip="Some tooltip with long text. Bla bla bla."
    hasAddressBook
    user="123:123"
    onChange={(val) => {
      setRichInputValue(val);
    }}
    addressBook={addressBook}
    setAddressBook={setAddressBook}
  />
</ThemeProvider>;
```

With error:

```js
import RichInput from "./RichInput";
import ThemeProvider from "../ThemeProvider";
import { ICONS } from "../../constants.js";
import { richInputOptions } from "../../mockup.js";

const [richInputValue, setRichInputValue] = React.useState("");

<ThemeProvider>
  <RichInput
    required
    label="Field Label"
    value={richInputValue}
    options={richInputOptions}
    placeholder="Enter some value here"
    tooltip="Some tooltip with long text. Bla bla bla."
    onChange={(val) => {
      setRichInputValue(val);
    }}
    error="The field is required"
  />
</ThemeProvider>;
```
