Horizontal tabs:

```js
import TabComponent from "./TabComponent.js";

const [value, setValue] = React.useState(0);

const tabs = ["All", "Success", "Error"];

<TabComponent
  value={value}
  type={"text"}
  activeIndicatorColor={"#8C30F5"}
  tabColor={"#0B0D17"}
  activeColor={"#8C30F5"}
  options={tabs}
  onChange={(tab) => {
    setValue(tab);
  }}
/>;
```

Vertical tabs with icons:

```js
import TabComponent from "./TabComponent.js";
import StarIcon from "@mui/icons-material/Phone";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import EmailIcon from "@mui/icons-material/Email";

const [value, setValue] = React.useState(0);

const tabs = [<StarIcon />, <CheckCircleIcon />, <EmailIcon />];

<div style={{ display: "flex", flexDirection: "row" }}>
  <TabComponent
    value={value}
    type={"icon"}
    orientation={"vertical"}
    activeIndicatorColor={"#8C30F5"}
    tabColor={"#0B0D17"}
    activeColor={"#8C30F5"}
    options={tabs}
    onChange={(tab) => {
      setValue(tab);
    }}
  />
</div>;
```
