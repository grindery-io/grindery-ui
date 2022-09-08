import React from "react";
import PropTypes from "prop-types";
import { Menu as MuiMenu, MenuItem } from "@mui/material";
import { NestedMenuItem } from "mui-nested-menu";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";

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
    <MuiMenu
      anchorEl={anchorEl}
      open={open}
      onClose={handleClose}
      anchorOrigin={anchorOrigin}
      transformOrigin={transformOrigin}
      //hideBackdrop
    >
      {items.map((item) => (
        <>
          {item.children ? (
            <NestedMenuItem
              className="nested-menu-item"
              leftIcon={item.icon}
              rightIcon={<ArrowRightIcon />}
              label={item.label}
              parentMenuOpen={open}
            >
              {item.children.map((subitem) => (
                <MenuItem
                  key={subitem.key}
                  onClick={() => {
                    if (subitem.onClick) {
                      subitem.onClick();
                    }
                    if (closeOnClick) {
                      handleClose();
                    }
                  }}
                >
                  {subitem.label
                    ? subitem.label
                    : subitem.Component
                    ? subitem.Component
                    : null}
                </MenuItem>
              ))}
            </NestedMenuItem>
          ) : (
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
          )}
        </>
      ))}
    </MuiMenu>
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
