import React from "react";
import { IconButton as MuiIconButton, Icon } from "@mui/material";
import PropTypes from "prop-types";

/**
 * @example ./Example.md
 */
function IconButton({ color, type, icon, onClick }) {
  return (
    <MuiIconButton onClick={onClick} aria-label="delete">
      {type === "text" ? (
        <Icon sx={{ color: color }}>{icon}</Icon>
      ) : (
        <img loading="lazy" width="24" height="24" src={icon} alt={icon} />
      )}
    </MuiIconButton>
  );
}

IconButton.propTypes = {
  color: PropTypes.string,
  icon: PropTypes.string,
  type: PropTypes.string,
};

export default IconButton;
