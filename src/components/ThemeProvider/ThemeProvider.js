import React from "react";
import PropTypes from "prop-types";
import { ThemeProvider as MuiThemeProvider } from "@mui/material/styles";
import { theme } from "./Style";

/**
 * Grindery UI theme provider. All other components must be children of the Provider component. It is a good practice to add ThemeProvider at the highest level, for example in the App.js file.
 *
 * @example ./Example.md
 */
function ThemeProvider(props) {
  return (
    <MuiThemeProvider theme={props.theme}>{props.children}</MuiThemeProvider>
  );
}

ThemeProvider.propTypes = {
  /** Custom theme (See Material UI theme for reference: https://mui.com/material-ui/customization/theming/) */
  theme: PropTypes.object,
};

ThemeProvider.defaultProps = {
  theme: theme,
};

export default ThemeProvider;
