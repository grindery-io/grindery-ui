import React from "react";
import { Drawer as MuiDrawer } from "@mui/material";
import PropTypes from "prop-types";

/**
 * @example ./Example.md
 */
function Drawer({
  variant,
  open,
  anchor,
  sx,
  hideBackdrop,
  elevation,
  PaperProps,
  ModalProps,
  container,
  ...props
}) {
  return (
    <MuiDrawer
      container={container}
      variant={variant}
      open={open}
      ModalProps={ModalProps}
      sx={sx}
      anchor={anchor}
      PaperProps={PaperProps}
    >
      {props.children}
    </MuiDrawer>
  );
}

Drawer.propTypes = {
  variant: PropTypes.string,
  open: PropTypes.bool,
  anchor: PropTypes.string,
  sx: PropTypes.object,
  PaperProps: PropTypes.object,
  elevation: PropTypes.number,
  hideBackdrop: PropTypes.bool,
};

export default Drawer;
