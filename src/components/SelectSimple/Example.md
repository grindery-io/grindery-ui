Default:

```js
import SelectSimple from "./SelectSimple.js";

const [value, setValue] = React.useState("");

const options = [
  { label: "USD", value: "USD" },
  { label: "EUR", value: "EUR" },
];

<SelectSimple
  options={options}
  value={value}
  onChange={(e) => {
    setValue(e.target.value);
  }}
  placeholder={"Currency"}
/>;
```
