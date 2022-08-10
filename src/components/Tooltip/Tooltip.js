import React from "react";
import PropTypes from "prop-types";
import { Tooltip as MuiTooltip } from "@mui/material";
import { theme } from "./Style";
import { ThemeProvider } from "@mui/material/styles";

/**
 *
 * @example ./Example.md
 */
function Tooltip({ title, children }) {
  return (
    <ThemeProvider theme={theme}>
      <MuiTooltip title={title} placement="top" arrow>
        {children}
      </MuiTooltip>
    </ThemeProvider>
  );
}

Tooltip.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Tooltip;
