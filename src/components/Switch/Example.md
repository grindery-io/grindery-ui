Default:

```js
import Switch from "./Switch.js";

const [value, setValue] = React.useState(false);

<Switch
  value={value}
  onChange={(e) => {
    setValue(e.target.checked);
  }}
/>;
```

With state text:

```js
import Switch from "./Switch.js";

const [value, setValue] = React.useState(false);

<Switch
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
import Switch from "./Switch.js";

const [value, setValue] = React.useState(false);

<Switch
  value={value}
  color="#8C30F5"
  onChange={(e) => {
    setValue(e.target.checked);
  }}
/>;
```
