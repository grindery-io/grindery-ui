import React from "react";
import PropTypes from "prop-types";
import { Tooltip as MuiTooltip } from "@mui/material";

/**
 *
 * @example ./Example.md
 */
function Tooltip({ title, children }) {
  return (
    <MuiTooltip title={title} placement="top" arrow>
      {children}
    </MuiTooltip>
  );
}

Tooltip.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Tooltip;
