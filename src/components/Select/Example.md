Default:

```js
import Select from "./Select.js";
import { autocompleteOptions as options } from "../../mockup.js";

const [selectValue, setSelectValue] = React.useState("");

<Select
  options={options}
  type={"default"}
  value={selectValue}
  label={"Connect with..."}
  required={true}
  onChange={(v) => {
    setSelectValue(v);
  }}
  placeholder={"Choose sheet..."}
></Select>;
```

Multiselect:

```js
import Select from "./Select.js";
import { autocompleteOptions as options } from "../../mockup.js";

const [multiSelectValue, setMultiSelectValue] = React.useState([""]);

<Select
  options={options}
  type={"searchLabel"}
  multiple={true}
  value={multiSelectValue}
  onChange={(v) => {
    setMultiSelectValue(v);
  }}
  label={"Connect with..."}
  placeholder={"0x"}
></Select>;
```

With help text:

```js
import Select from "./Select.js";
import { autocompleteOptions as options } from "../../mockup.js";

const [selectValue, setSelectValue] = React.useState("");

<Select
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
></Select>;
```

With error:

```js
import Select from "./Select.js";
import { autocompleteOptions as options } from "../../mockup.js";

const [selectValue, setSelectValue] = React.useState("");

<Select
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
></Select>;
```
