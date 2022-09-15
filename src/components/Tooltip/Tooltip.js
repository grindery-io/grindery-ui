import React from "react";
import PropTypes from "prop-types";
import { Tooltip as MuiTooltip } from "@mui/material";

/**
 *
 * @example ./Example.md
 */
function Tooltip({ title, children, placement, sx, open, onClose, onOpen }) {
  return (
    <MuiTooltip
      title={title}
      placement={placement || "top"}
      arrow
      sx={sx}
      open={open}
      onClose={onClose}
      onOpen={onOpen}
    >
      {children}
    </MuiTooltip>
  );
}

Tooltip.propTypes = {
  title: PropTypes.string.isRequired,
  placement: PropTypes.string,
  sx: PropTypes.any,
  open: PropTypes.bool,
  onClose: PropTypes.func,
  onOpen: PropTypes.func,
};

export default Tooltip;
