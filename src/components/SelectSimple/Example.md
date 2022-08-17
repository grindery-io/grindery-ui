Default:

```js
import SelectSimple from "./SelectSimple.js";
import ThemeProvider from "../ThemeProvider";

const [value, setValue] = React.useState("USD");

const options = [
  { label: "USD", value: "USD" },
  { label: "EUR", value: "EUR" },
];

<ThemeProvider>
  <SelectSimple
    options={options}
    value={value}
    onChange={(e) => {
      setValue(e.target.value);
    }}
  />
</ThemeProvider>;
```
