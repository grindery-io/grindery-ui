Default:

```js
import InputSuffix from "./InputSuffix.js";

const [textValue, setTextValue] = React.useState("");

<InputSuffix
  value={textValue}
  onChange={(e) => {
    setTextValue(e.target.value);
  }}
  placeholder="Enter value"
  suffix={"ETH"}
/>;
```
