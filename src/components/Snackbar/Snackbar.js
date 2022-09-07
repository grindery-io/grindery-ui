import React from "react";
import { Snackbar as MuiSnackbar } from "@mui/material";
import Alert from "../Alert/Alert";
import PropTypes from "prop-types";

/**
 * @example ./Example.md
 */
function Snackbar({
  open,
  autoHideDuration,
  handleClose,
  action,
  message,
  severity,
  icon,
  hideCloseButton,
}) {
  return (
    <MuiSnackbar
      open={open}
      autoHideDuration={autoHideDuration}
      onClose={handleClose}
      message={severity ? undefined : message}
      action={severity ? undefined : action}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
    >
      {severity ? (
        <div style={{ maxWidth: "323px" }}>
          <Alert
            onClose={hideCloseButton ? undefined : handleClose}
            color={severity === "success" ? undefined : severity}
            action={action}
            icon={icon}
            elevation={0}
          >
            {message}
          </Alert>
        </div>
      ) : null}
    </MuiSnackbar>
  );
}

Snackbar.propTypes = {
  open: PropTypes.bool.isRequired,
  autoHideDuration: PropTypes.number,
  handleClose: PropTypes.func.isRequired,
  action: PropTypes.node,
  message: PropTypes.string.isRequired,
  severity: PropTypes.string,
  icon: PropTypes.element,
  hideCloseButton: PropTypes.bool,
};

Snackbar.defaultProps = {
  autoHideDuration: 6000,
};

export default Snackbar;
