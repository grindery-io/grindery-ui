Default:

```js
import Autocomplete from "./Autocomplete.js";
import { autocompleteOptions } from "../../mockup.js";

const [autocompleteValue, setAutocompleteValue] = React.useState("");

<Autocomplete
  options={autocompleteOptions}
  label={"Connect with..."}
  value={autocompleteValue}
  placeholder={"Search for an App"}
  onChange={(v) => {
    setAutocompleteValue(v);
  }}
></Autocomplete>;
```

With "Suggest" button in the dropdown":

```js
import Autocomplete from "./Autocomplete.js";
import { autocompleteOptions } from "../../mockup.js";

const [autocompleteValue, setAutocompleteValue] = React.useState("");

<Autocomplete
  options={autocompleteOptions}
  label={"Connect with..."}
  value={autocompleteValue}
  placeholder={"Search for an App"}
  buttonSuggestion
  onChange={(v) => {
    setAutocompleteValue(v);
  }}
></Autocomplete>;
```

Required:

```js
import Autocomplete from "./Autocomplete.js";
import { autocompleteOptions } from "../../mockup.js";

const [autocompleteValue, setAutocompleteValue] = React.useState("");

<Autocomplete
  options={autocompleteOptions}
  label={"Connect with..."}
  value={autocompleteValue}
  placeholder={"Search for an App"}
  onChange={(v) => {
    setAutocompleteValue(v);
  }}
  required={true}
></Autocomplete>;
```

With helper text:

```js
import Autocomplete from "./Autocomplete.js";
import { autocompleteOptions } from "../../mockup.js";

const [autocompleteValue, setAutocompleteValue] = React.useState("");

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
></Autocomplete>;
```

With value:

```js
import Autocomplete from "./Autocomplete.js";
import { autocompleteOptions } from "../../mockup.js";

const [autocompleteValue, setAutocompleteValue] = React.useState(
  autocompleteOptions[1].value
);

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
></Autocomplete>;
```

With error:

```js
import Autocomplete from "./Autocomplete.js";
import { autocompleteOptions } from "../../mockup.js";

const [autocompleteValue, setAutocompleteValue] = React.useState("");

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
></Autocomplete>;
```