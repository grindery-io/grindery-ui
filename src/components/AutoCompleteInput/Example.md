Default:

```js
import AutoCompleteInput from "./AutoCompleteInput.js";
import { autocompleteOptions } from "../../mockup.js";

const [autocompleteValue, setAutocompleteValue] = React.useState("");

<AutoCompleteInput
  options={autocompleteOptions}
  label={"Connect with..."}
  value={autocompleteValue}
  placeholder={"Search for an App"}
  onChange={(v) => {
    setAutocompleteValue(v);
  }}
></AutoCompleteInput>;
```

With "Suggest" button in the dropdown":

```js
import AutoCompleteInput from "./AutoCompleteInput.js";
import { autocompleteOptions } from "../../mockup.js";

const [autocompleteValue, setAutocompleteValue] = React.useState("");

<AutoCompleteInput
  options={autocompleteOptions}
  label={"Connect with..."}
  value={autocompleteValue}
  placeholder={"Search for an App"}
  buttonSuggestion
  onChange={(v) => {
    setAutocompleteValue(v);
  }}
></AutoCompleteInput>;
```

Required:

```js
import AutoCompleteInput from "./AutoCompleteInput.js";
import { autocompleteOptions } from "../../mockup.js";

const [autocompleteValue, setAutocompleteValue] = React.useState("");

<AutoCompleteInput
  options={autocompleteOptions}
  label={"Connect with..."}
  value={autocompleteValue}
  placeholder={"Search for an App"}
  onChange={(v) => {
    setAutocompleteValue(v);
  }}
  required={true}
></AutoCompleteInput>;
```

With helper text:

```js
import AutoCompleteInput from "./AutoCompleteInput.js";
import { autocompleteOptions } from "../../mockup.js";

const [autocompleteValue, setAutocompleteValue] = React.useState("");

<AutoCompleteInput
  options={autocompleteOptions}
  label={"Connect with..."}
  value={autocompleteValue}
  texthelper="You must have column headers"
  placeholder={"Search for an App"}
  onChange={(v) => {
    setAutocompleteValue(v);
  }}
  required={true}
></AutoCompleteInput>;
```

With value:

```js
import AutoCompleteInput from "./AutoCompleteInput.js";
import { autocompleteOptions } from "../../mockup.js";

const [autocompleteValue, setAutocompleteValue] = React.useState(
  autocompleteOptions[1].value
);

<AutoCompleteInput
  options={autocompleteOptions}
  label={"Connect with..."}
  value={autocompleteValue}
  texthelper="You must have column headers"
  placeholder={"Search for an App"}
  onChange={(v) => {
    setAutocompleteValue(v);
  }}
  required={true}
></AutoCompleteInput>;
```

With error:

```js
import AutoCompleteInput from "./AutoCompleteInput.js";
import { autocompleteOptions } from "../../mockup.js";

const [autocompleteValue, setAutocompleteValue] = React.useState("");

<AutoCompleteInput
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
></AutoCompleteInput>;
```
