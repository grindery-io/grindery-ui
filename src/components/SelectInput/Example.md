Default:

```js
import SelectInput from "./SelectInput.js";
import { autocompleteOptions as options } from "../../mockup.js";

const [selectValue, setSelectValue] = React.useState("");

<SelectInput
  options={options}
  type={"default"}
  value={selectValue}
  label={"Connect with..."}
  required={true}
  onChange={(v) => {
    setSelectValue(v);
  }}
  placeholder={"Choose sheet..."}
></SelectInput>;
```

Multiselect:

```js
import SelectInput from "./SelectInput.js";
import { autocompleteOptions as options } from "../../mockup.js";

const [multiSelectValue, setMultiSelectValue] = React.useState([""]);

<SelectInput
  options={options}
  type={"searchLabel"}
  multiple={true}
  value={multiSelectValue}
  onChange={(v) => {
    setMultiSelectValue(v);
  }}
  label={"Connect with..."}
  placeholder={"0x"}
></SelectInput>;
```

With help text:

```js
import SelectInput from "./SelectInput.js";
import { autocompleteOptions as options } from "../../mockup.js";

const [selectValue, setSelectValue] = React.useState("");

<SelectInput
  options={options}
  type={"default"}
  value={selectValue}
  label={"Connect with..."}
  required={true}
  texthelper="You must have column headers"
  onChange={(v) => {
    setSelectValue(v);
  }}
  placeholder={"Choose sheet..."}
></SelectInput>;
```

With error:

```js
import SelectInput from "./SelectInput.js";
import { autocompleteOptions as options } from "../../mockup.js";

const [selectValue, setSelectValue] = React.useState("");

<SelectInput
  options={options}
  type={"default"}
  value={selectValue}
  label={"Connect with..."}
  required={true}
  texthelper="You must have column headers"
  onChange={(v) => {
    setSelectValue(v);
  }}
  placeholder={"Choose sheet..."}
  error="The field is required"
></SelectInput>;
```
