Grindery UI theme is a fork of default [Material theme](https://mui.com/material-ui/customization/theming/) with custom styles and variables.

All Grindery apps must use the theme included in this library. Third-party apps can extend default Grindery theme, use it as a reference, or define custom theme from scratch. See [ThemeProvider](#themeprovider) to learn how to use custom theme.

### Grindery theme object:

```js
import { theme } from "./src/components/ThemeProvider/Style.js";
import ReactJson from "react-json-view";

//<pre>{JSON.stringify(theme, null, 2)}</pre>;
<ReactJson
  src={JSON.parse(JSON.stringify(theme))}
  name="theme"
  collapsed={1}
  displayObjectSize={false}
  displayDataTypes={false}
/>;
```
