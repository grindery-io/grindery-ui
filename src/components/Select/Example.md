Default:

```js
import Select from "./Select.js";
import ThemeProvider from "../ThemeProvider";
import { autocompleteOptions as options } from "../../mockup.js";

const [selectValue, setSelectValue] = React.useState("");

<ThemeProvider>
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
  ></Select>
</ThemeProvider>;
```

Multiselect:

```js
import Select from "./Select.js";
import ThemeProvider from "../ThemeProvider";
import { autocompleteOptions as options } from "../../mockup.js";

const [multiSelectValue, setMultiSelectValue] = React.useState([""]);

<ThemeProvider>
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
  ></Select>
</ThemeProvider>;
```

With help text:

```js
import Select from "./Select.js";
import ThemeProvider from "../ThemeProvider";
import { autocompleteOptions as options } from "../../mockup.js";

const [selectValue, setSelectValue] = React.useState("");

<ThemeProvider>
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
  ></Select>
</ThemeProvider>;
```

With error:

```js
import Select from "./Select.js";
import ThemeProvider from "../ThemeProvider";
import { autocompleteOptions as options } from "../../mockup.js";

const [selectValue, setSelectValue] = React.useState("");

<ThemeProvider>
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
  ></Select>
</ThemeProvider>;
```
