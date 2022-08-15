import React from "react";
import { Alert as MuiAlert } from "@mui/material";
import PropTypes from "prop-types";

/**
 *
 * @example ./Example.md
 */
function Alert({ color, icon, ...props }) {
  return (
    <MuiAlert icon={icon} severity={color}>
      {props.children}
    </MuiAlert>
  );
}

Alert.propTypes = {
  color: PropTypes.string,
  icon: PropTypes.element,
};

export default Alert;
