Default:

```js
import SuffixInput from "./SuffixInput.js";
import ThemeProvider from "../ThemeProvider";

const [textValue, setTextValue] = React.useState("");

<ThemeProvider>
  <SuffixInput
    value={textValue}
    onChange={(e) => {
      setTextValue(e.target.value);
    }}
    placeholder="Enter value"
    suffix={"ETH"}
  />
</ThemeProvider>;
```
