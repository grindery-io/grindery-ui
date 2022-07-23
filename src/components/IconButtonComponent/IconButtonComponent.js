import React from "react";
import { IconButton, Icon } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./Style";
import PropTypes from "prop-types";

/**
 * @example ./Example.md
 */
function IconButtonComponent({ color, type, icon, onClick }) {
  return (
    <ThemeProvider theme={theme}>
      <IconButton onClick={onClick} aria-label="delete">
        {type === "text" ? (
          <Icon sx={{ color: color }}>{icon}</Icon>
        ) : (
          <img loading="lazy" width="24" height="24" src={icon} alt={icon} />
        )}
      </IconButton>
    </ThemeProvider>
  );
}

IconButtonComponent.propTypes = {
  color: PropTypes.string,
  icon: PropTypes.string,
  type: PropTypes.string,
};

export default IconButtonComponent;
