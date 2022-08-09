Default:

```js
import Drawer from "./Drawer.js";
import Button from "../Button/Button.js";
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
    <Button
      value="Open left drawer"
      onClick={() => {
        setAnchor("left");
        setOpen(true);
      }}
      variant="outlined"
    />
    <Button
      value="Open right drawer"
      onClick={() => {
        setAnchor("right");
        setOpen(true);
      }}
      variant="outlined"
    />
    <Button
      value="Open top drawer"
      onClick={() => {
        setAnchor("top");
        setOpen(true);
      }}
      variant="outlined"
    />
    <Button
      value="Open bottom drawer"
      onClick={() => {
        setAnchor("bottom");
        setOpen(true);
      }}
      variant="outlined"
    />
  </div>
  <Drawer open={open} anchor={anchor}>
    <div style={{ textAlign: "center", padding: "20px" }}>
      <Text variant="body1" value="Drawer" />
      <br />
      <Button
        value="Close drawer"
        color="primary"
        onClick={() => {
          setOpen(false);
        }}
        size="small"
      />
    </div>
  </Drawer>
</div>;
```
