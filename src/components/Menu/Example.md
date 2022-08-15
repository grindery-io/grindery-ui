Default:

```js
import Menu from "./Menu.js";
import ThemeProvider from "../ThemeProvider";
import Button from "../Button/Button.js";

const [anchorEl, setAnchorEl] = React.useState(null);

const handleButtonClick = (event) => {
  setAnchorEl(event.currentTarget);
};

const handleMenuClose = () => {
  setAnchorEl(null);
};

<ThemeProvider>
  <Button
    onClick={handleButtonClick}
    value="Open menu"
    size="small"
    variant="outlined"
    color="primary"
  />
  <Menu
    anchorEl={anchorEl}
    onClose={handleMenuClose}
    closeOnClick
    items={[
      {
        key: "1",
        label: "Menu item 1",
      },
      {
        key: "2",
        label: "Menu item 2",
      },
      {
        key: "3",
        label: "Menu item 3",
      },
    ]}
  />
</ThemeProvider>;
```

With custom position:

```js
import Menu from "./Menu.js";
import ThemeProvider from "../ThemeProvider";
import Button from "../Button/Button.js";

const [anchorEl, setAnchorEl] = React.useState(null);

const handleButtonClick = (event) => {
  setAnchorEl(event.currentTarget);
};

const handleMenuClose = () => {
  setAnchorEl(null);
};

<ThemeProvider>
  <Button
    onClick={handleButtonClick}
    value="Open menu"
    size="small"
    variant="outlined"
    color="primary"
  />
  <Menu
    transformOrigin={{
      vertical: "top",
      horizontal: "center",
    }}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "center",
    }}
    anchorEl={anchorEl}
    onClose={handleMenuClose}
    closeOnClick
    items={[
      {
        key: "1",
        label: "Menu item 1",
      },
      {
        key: "2",
        label: "Menu item 2",
      },
      {
        key: "3",
        label: "Menu item 3",
      },
    ]}
  />
</ThemeProvider>;
```

With custom action on menu item click:

```js
import Menu from "./Menu.js";
import ThemeProvider from "../ThemeProvider";
import Button from "../Button/Button.js";

const [anchorEl, setAnchorEl] = React.useState(null);

const handleButtonClick = (event) => {
  setAnchorEl(event.currentTarget);
};

const handleMenuClose = () => {
  setAnchorEl(null);
};

<ThemeProvider>
  <Button
    onClick={handleButtonClick}
    value="Open menu"
    size="small"
    variant="outlined"
    color="primary"
  />
  <Menu
    transformOrigin={{
      vertical: "top",
      horizontal: "center",
    }}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "center",
    }}
    anchorEl={anchorEl}
    onClose={handleMenuClose}
    closeOnClick
    items={[
      {
        key: "1",
        label: "Menu item 1",
        onClick: () => {
          alert("Menu item 1 clicked");
        },
      },
      {
        key: "2",
        label: "Menu item 2",
        onClick: () => {
          alert("Menu item 2 clicked");
        },
      },
      {
        key: "3",
        label: "Menu item 3",
        onClick: () => {
          alert("Menu item 3 clicked");
        },
      },
    ]}
  />
</ThemeProvider>;
```

With custom menu item:

```js
import Menu from "./Menu.js";
import ThemeProvider from "../ThemeProvider";
import Button from "../Button/Button.js";
import { ICONS } from "../../constants.js";

const [anchorEl, setAnchorEl] = React.useState(null);

const handleButtonClick = (event) => {
  setAnchorEl(event.currentTarget);
};

const handleMenuClose = () => {
  setAnchorEl(null);
};

<ThemeProvider>
  <Button
    onClick={handleButtonClick}
    value="Open menu"
    size="small"
    variant="outlined"
    color="primary"
  />
  <Menu
    transformOrigin={{
      vertical: "top",
      horizontal: "center",
    }}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "center",
    }}
    anchorEl={anchorEl}
    onClose={handleMenuClose}
    closeOnClick
    items={[
      {
        key: "1",
        Component: (
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "flex-start",
              flexWrap: "nowrap",
              gap: "10px",
            }}
          >
            <img
              style={{ width: "16px", height: "16px" }}
              src={ICONS.GOOGLE_SHEETS}
              alt=""
            />
            <span>Menu item 1</span>
          </div>
        ),
      },
      {
        key: "2",
        Component: (
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "flex-start",
              flexWrap: "nowrap",
              gap: "10px",
            }}
          >
            <img
              style={{ width: "16px", height: "16px" }}
              src={ICONS.MOLOCH_DAO}
              alt=""
            />
            <span>Menu item 2</span>
          </div>
        ),
      },
      {
        key: "3",
        Component: (
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "flex-start",
              flexWrap: "nowrap",
              gap: "10px",
            }}
          >
            <img
              style={{ width: "16px", height: "16px" }}
              src={ICONS.GOOGLE_SHEETS}
              alt=""
            />
            <span>Menu item 3</span>
          </div>
        ),
      },
    ]}
  />
</ThemeProvider>;
```
