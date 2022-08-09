import React from "react";
import { Alert as MuiAlert } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./Style";
import PropTypes from "prop-types";

/**
 *
 * @example ./Example.md
 */
function Alert({ color, icon, ...props }) {
  return (
    <ThemeProvider theme={theme}>
      <MuiAlert icon={icon} severity={color}>
        {props.children}
      </MuiAlert>
    </ThemeProvider>
  );
}

Alert.propTypes = {
  color: PropTypes.string,
  icon: PropTypes.element,
};

export default Alert;
