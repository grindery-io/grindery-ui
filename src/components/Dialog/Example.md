Default:

```js
import Dialog from "./Dialog.js";
import ThemeProvider from "../ThemeProvider";
import Button from "../Button/Button.js";
import Text from "../Text/Text.js";

const [open, setOpen] = React.useState(false);

<ThemeProvider>
  <div>
    <Button
      value="Open dialog"
      onClick={() => {
        setOpen(true);
      }}
      size="small"
    />
    <Dialog
      open={open}
      onClose={() => {
        setOpen(false);
      }}
    >
      <div style={{ textAlign: "center" }}>
        <Text variant="body1" value="Dialog Box" />
        <br />
        <Button
          value="Close"
          onClick={() => {
            setOpen(false);
          }}
          size="small"
        />
      </div>
    </Dialog>
  </div>
</ThemeProvider>;
```

With maximum width:

```js
import Dialog from "./Dialog.js";
import ThemeProvider from "../ThemeProvider";
import Button from "../Button/Button.js";
import Text from "../Text/Text.js";

const [open, setOpen] = React.useState(false);

<ThemeProvider>
  <div>
    <Button
      value="Open dialog"
      onClick={() => {
        setOpen(true);
      }}
      size="small"
    />
    <Dialog
      open={open}
      onClose={() => {
        setOpen(false);
      }}
      maxWidth="300px"
    >
      <div style={{ textAlign: "center" }}>
        <Text variant="body1" value="Dialog Box" />
        <br />
        <Button
          value="Close"
          onClick={() => {
            setOpen(false);
          }}
          size="small"
        />
      </div>
    </Dialog>
  </div>
</ThemeProvider>;
```
