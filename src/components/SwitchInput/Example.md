Default:

```js
import SwitchInput from "./SwitchInput.js";

const [value, setValue] = React.useState(false);

<SwitchInput
  value={value}
  onChange={(e) => {
    setValue(e.target.checked);
  }}
/>;
```

With state text:

```js
import SwitchInput from "./SwitchInput.js";

const [value, setValue] = React.useState(false);

<SwitchInput
  value={value}
  on="On"
  off="Off"
  onChange={(e) => {
    setValue(e.target.checked);
  }}
/>;
```

With custom color:

```js
import SwitchInput from "./SwitchInput.js";

const [value, setValue] = React.useState(false);

<SwitchInput
  value={value}
  color="#8C30F5"
  onChange={(e) => {
    setValue(e.target.checked);
  }}
/>;
```
