Default:

```js
import DrawerComponent from "./DrawerComponent.js";
import ButtonElement from "../ButtonElement/ButtonElement.js";
import Text from "../Text/Text.js";

const [open, setOpen] = React.useState(false);
const [anchor, setAnchor] = React.useState("left");

<div>
  <div
    style={{
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "flex-start",
      flexWrap: "nowrap",
      gap: "20px",
    }}
  >
    <ButtonElement
      value="Open left drawer"
      onClick={() => {
        setAnchor("left");
        setOpen(true);
      }}
      variant="outlined"
    />
    <ButtonElement
      value="Open right drawer"
      onClick={() => {
        setAnchor("right");
        setOpen(true);
      }}
      variant="outlined"
    />
    <ButtonElement
      value="Open top drawer"
      onClick={() => {
        setAnchor("top");
        setOpen(true);
      }}
      variant="outlined"
    />
    <ButtonElement
      value="Open bottom drawer"
      onClick={() => {
        setAnchor("bottom");
        setOpen(true);
      }}
      variant="outlined"
    />
  </div>
  <DrawerComponent open={open} anchor={anchor}>
    <div style={{ textAlign: "center", padding: "20px" }}>
      <Text variant="body1" value="Drawer" />
      <br />
      <ButtonElement
        value="Close drawer"
        color="primary"
        onClick={() => {
          setOpen(false);
        }}
        size="small"
      />
    </div>
  </DrawerComponent>
</div>;
```
