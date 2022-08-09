import React from "react";
import { Drawer as MuiDrawer } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./Style";
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
    <ThemeProvider theme={theme}>
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
    </ThemeProvider>
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
