Horizontal tabs:

```js
import Tabs from "./Tabs.js";
import ThemeProvider from "../ThemeProvider";

const [value, setValue] = React.useState(0);

const tabs = ["All", "Success", "Error"];

<ThemeProvider>
  <Tabs
    value={value}
    type={"text"}
    tabColor={"#0B0D17"}
    options={tabs}
    onChange={(tab) => {
      setValue(tab);
    }}
  />
</ThemeProvider>;
```

Vertical tabs with icons:

```js
import Tabs from "./Tabs.js";
import ThemeProvider from "../ThemeProvider";
import StarIcon from "@mui/icons-material/Phone";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import EmailIcon from "@mui/icons-material/Email";

const [value, setValue] = React.useState(0);

const tabs = [<StarIcon />, <CheckCircleIcon />, <EmailIcon />];

<ThemeProvider>
  <div style={{ display: "flex", flexDirection: "row" }}>
    <Tabs
      value={value}
      type={"icon"}
      orientation={"vertical"}
      tabColor={"#0B0D17"}
      options={tabs}
      onChange={(tab) => {
        setValue(tab);
      }}
    />
  </div>
</ThemeProvider>;
```

With no initial tab selected:

```js
import Tabs from "./Tabs.js";
import ThemeProvider from "../ThemeProvider";

const [value, setValue] = React.useState(false);

const tabs = ["All", "Success", "Error"];

<ThemeProvider>
  <Tabs
    value={value}
    type={"text"}
    tabColor={"#0B0D17"}
    options={tabs}
    onChange={(tab) => {
      setValue(tab);
    }}
  />
</ThemeProvider>;
```
