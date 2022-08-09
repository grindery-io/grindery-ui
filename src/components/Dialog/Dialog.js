import React from "react";
import { Dialog as MuiDialog} from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./Style";
import PropTypes from "prop-types";

/**
 * @example ./Example.md
 */
function Dialog({ open, onClose, maxWidth, ...props }) {
  return (
    <ThemeProvider theme={theme}>
      <MuiDialog sx={{ maxWidth: maxWidth }} onClose={onClose} open={open}>
        {props.children}
      </MuiDialog>
    </ThemeProvider>
  );
}

Dialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  maxWidth: PropTypes.string,
};

export default Dialog;
