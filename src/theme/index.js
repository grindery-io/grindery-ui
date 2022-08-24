import { createTheme } from "@mui/material/styles";
import palette from "./palette";
import severity from "./severity";
import typography from "./typography";
import components from "./components/index.js";

const theme = createTheme({
  palette,
  severity,
  typography,
  components,
});

export default theme;
