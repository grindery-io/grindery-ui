import React from "react";
import PropTypes from "prop-types";
import { Menu as MuiMenu, MenuItem } from "@mui/material";
import { theme } from "./Style";
import { ThemeProvider } from "@mui/material/styles";

/**
 *
 * @example ./Example.md
 */
function Menu({
  anchorEl,
  onClose,
  items,
  closeOnClick,
  anchorOrigin,
  transformOrigin,
}) {
  const open = Boolean(anchorEl);
  const handleClose = () => {
    onClose();
  };
  return (
    <ThemeProvider theme={theme}>
      <MuiMenu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={anchorOrigin}
        transformOrigin={transformOrigin}
      >
        {items.map((item) => (
          <MenuItem
            key={item.key}
            onClick={() => {
              if (item.onClick) {
                item.onClick();
              }
              if (closeOnClick) {
                handleClose();
              }
            }}
          >
            {item.label ? item.label : item.Component ? item.Component : null}
          </MenuItem>
        ))}
      </MuiMenu>
    </ThemeProvider>
  );
}

Menu.propTypes = {
  /** Anchor element */
  anchorEl: PropTypes.element,

  /** Function called on menu close */
  onClose: PropTypes.func.isRequired,

  /** Menu items */
  items: PropTypes.array,

  /** If menu should be closed on item click */
  closeOnClick: PropTypes.bool,

  /** Point on the anchor where the dropdown will be attached */
  anchorOrigin: PropTypes.object,

  /** Point on the dropdown which will be attached to the anchor's origin. */
  transformOrigin: PropTypes.object,
};

Menu.defaultProps = {
  anchorEl: null,
  items: [],
};

export default Menu;
