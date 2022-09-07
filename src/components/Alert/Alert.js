import React from "react";
import { Alert as MuiAlert } from "@mui/material";
import PropTypes from "prop-types";

/**
 *
 * @example ./Example.md
 */
function Alert({ color, icon, action, onClose, elevation, ...props }) {
  return (
    <MuiAlert
      icon={icon}
      severity={color}
      action={action}
      onClose={onClose}
      elevation={elevation}
    >
      {props.children}
    </MuiAlert>
  );
}

Alert.propTypes = {
  color: PropTypes.string,
  icon: PropTypes.element,
  onClose: PropTypes.func,
  action: PropTypes.node,
  elevation: PropTypes.number,
};

export default Alert;
