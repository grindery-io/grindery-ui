Default:

```js
import SuffixInput from "./SuffixInput.js";

const [textValue, setTextValue] = React.useState("");

<SuffixInput
  value={textValue}
  onChange={(e) => {
    setTextValue(e.target.value);
  }}
  placeholder="Enter value"
  suffix={"ETH"}
/>;
```
