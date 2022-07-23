Default:

```js
import DialogBox from "./DialogBox.js";
import ButtonElement from "../ButtonElement/ButtonElement.js";
import Text from "../Text/Text.js";

const [open, setOpen] = React.useState(false);

<div>
  <ButtonElement
    value="Open dialog"
    onClick={() => {
      setOpen(true);
    }}
    size="small"
  />
  <DialogBox
    open={open}
    onClose={() => {
      setOpen(false);
    }}
  >
    <div style={{ textAlign: "center" }}>
      <Text variant="body1" value="Dialog Box" />
      <br />
      <ButtonElement
        value="Close"
        onClick={() => {
          setOpen(false);
        }}
        size="small"
      />
    </div>
  </DialogBox>
</div>;
```

With maximum width:

```js
import DialogBox from "./DialogBox.js";
import ButtonElement from "../ButtonElement/ButtonElement.js";
import Text from "../Text/Text.js";

const [open, setOpen] = React.useState(false);

<div>
  <ButtonElement
    value="Open dialog"
    onClick={() => {
      setOpen(true);
    }}
    size="small"
  />
  <DialogBox
    open={open}
    onClose={() => {
      setOpen(false);
    }}
    maxWidth="300px"
  >
    <div style={{ textAlign: "center" }}>
      <Text variant="body1" value="Dialog Box" />
      <br />
      <ButtonElement
        value="Close"
        onClick={() => {
          setOpen(false);
        }}
        size="small"
      />
    </div>
  </DialogBox>
</div>;
```
