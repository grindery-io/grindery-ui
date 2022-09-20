Default:

```js
import Autocomplete from "./Autocomplete.js";
import ThemeProvider from "../ThemeProvider";
import { autocompleteOptions } from "../../mockup.js";

const [autocompleteValue, setAutocompleteValue] = React.useState("");

<ThemeProvider>
  <Autocomplete
    options={autocompleteOptions}
    label={"Connect with..."}
    value={autocompleteValue}
    placeholder={"Search for an App"}
    onChange={(v) => {
      setAutocompleteValue(v);
    }}
    tooltip="some help text"
  ></Autocomplete>
</ThemeProvider>;
```

With "Suggest" button in the dropdown":

```js
import Autocomplete from "./Autocomplete.js";
import ThemeProvider from "../ThemeProvider";
import { autocompleteOptions } from "../../mockup.js";

const [autocompleteValue, setAutocompleteValue] = React.useState("");

<ThemeProvider>
  <Autocomplete
    options={autocompleteOptions}
    label={"Connect with..."}
    value={autocompleteValue}
    placeholder={"Search for an App"}
    buttonSuggestion
    onChange={(v) => {
      setAutocompleteValue(v);
    }}
  ></Autocomplete>
</ThemeProvider>;
```

Required:

```js
import Autocomplete from "./Autocomplete.js";
import ThemeProvider from "../ThemeProvider";
import { autocompleteOptions } from "../../mockup.js";

const [autocompleteValue, setAutocompleteValue] = React.useState("");

<ThemeProvider>
  <Autocomplete
    options={autocompleteOptions}
    label={"Connect with..."}
    value={autocompleteValue}
    placeholder={"Search for an App"}
    onChange={(v) => {
      setAutocompleteValue(v);
    }}
    required={true}
  ></Autocomplete>
</ThemeProvider>;
```

With helper text:

```js
import Autocomplete from "./Autocomplete.js";
import ThemeProvider from "../ThemeProvider";
import { autocompleteOptions } from "../../mockup.js";

const [autocompleteValue, setAutocompleteValue] = React.useState("");

<ThemeProvider>
  <Autocomplete
    options={autocompleteOptions}
    label={"Connect with..."}
    value={autocompleteValue}
    texthelper="You must have column headers"
    placeholder={"Search for an App"}
    onChange={(v) => {
      setAutocompleteValue(v);
    }}
    required={true}
  ></Autocomplete>
</ThemeProvider>;
```

With value:

```js
import Autocomplete from "./Autocomplete.js";
import ThemeProvider from "../ThemeProvider";
import { autocompleteOptions } from "../../mockup.js";

const [autocompleteValue, setAutocompleteValue] = React.useState(
  autocompleteOptions[1].value
);

<ThemeProvider>
  <Autocomplete
    options={autocompleteOptions}
    label={"Connect with..."}
    value={autocompleteValue}
    texthelper="You must have column headers"
    placeholder={"Search for an App"}
    onChange={(v) => {
      setAutocompleteValue(v);
    }}
    required={true}
  ></Autocomplete>
</ThemeProvider>;
```

With error:

```js
import Autocomplete from "./Autocomplete.js";
import ThemeProvider from "../ThemeProvider";
import { autocompleteOptions } from "../../mockup.js";

const [autocompleteValue, setAutocompleteValue] = React.useState("");

<ThemeProvider>
  <Autocomplete
    options={autocompleteOptions}
    label={"Connect with..."}
    value={autocompleteValue}
    texthelper="You must have column headers"
    placeholder={"Search for an App"}
    onChange={(v) => {
      setAutocompleteValue(v);
    }}
    required={true}
    error="The field is required"
  ></Autocomplete>
</ThemeProvider>;
```
